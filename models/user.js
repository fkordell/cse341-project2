const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        minlength: [3, 'Minimum name length is 3 characters']
    },
    password: {
        type: String,
        minlength: [6, 'Minimum password length is 6 characters']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    phoneNumber: {
        type: String,
        unique: true
    },
    googleId: String, 
});

userSchema.path('email').required(true, 'Email is required');
userSchema.path('userName').required(false);
userSchema.path('password').required(false);
userSchema.path('phoneNumber').required(false);

const User = mongoose.model('User', userSchema);
module.exports = User;
