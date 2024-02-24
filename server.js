require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const User = require('./models/user')
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  async(accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({googleId: profile.id})

      if (!user){
        user = await User.create({
          googleId: profile.id,
          userName: profile.displayName,
          email: profile.emails[0].value, 
          profilePicture: profile.photos[0].value 
        });
      }
      done(null, user);
    } catch (error) {
      done(error, null)
    }
  }
));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(async(id, done) => {
  try {
    const user = await User.findById(id);
    if (user){
      done(null, user);
    } else{
      done(null, false)
    } 
  } catch (error) {
    done(error, false)
  }
});


app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);

app.use('/', require('./routes'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({message: 'Internal Server Error'});
});

const db = require('./models');

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(port, () => console.log(`Server running and connected to DB on port ${port}`));
    })
    .catch(err => {
        console.error('Database connection failed', err);
        process.exit(1);
    });
