const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const router = express.Router();
const userController = require('../controllers/user');

//Get a list of all users
router.get('/', userController.getUsers);

//Get an event by it's id
router.get('/:id', userController.getUserById);

//Create a new event
router.post('/', requiresAuth(), userController.createUser);

//Update an event
router.put('/:id', requiresAuth(), userController.updateUser);

//Delete an event
router.delete('/:id', requiresAuth(), userController.deleteUser);

module.exports = router;