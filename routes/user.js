const express = require('express');
const router = express.Router();
const authorize = require('../controllers/authenticate');
const userController = require('../controllers/user');

//Get a list of all users
router.get('/', userController.getUsers);

//Get an event by it's id
router.get('/:id', userController.getUserById);

//Create a new event
router.post('/', authorize.authUserLogin, userController.createUser);

//Update an event
router.put('/:id', authorize.authUserLogin, userController.updateUser);

//Delete an event
router.delete('/:id', authorize.authUserLogin, userController.deleteUser);

module.exports = router;