const mongoose = require('mongoose');
const {isEmail} = require('validator');

const userSchema = new mongoose.Schema({
    userName: { type: String, required: [true, 'Please enter a name'], minlength: [3, 'Minimum password length is 3 characters'] },
    password: { type: String, required: [true, 'Please enter a password'], minlength: [6, 'Minimum password length is 6 characters'] },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
      },
    phoneNumber: { type: String, unique: true, required: [true, 'User phone number required'] },
});

const user = mongoose.model('User', userSchema);
module.exports = user;