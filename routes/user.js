const express = require('express');
const isAuthenticated = require('../middleware/isAuthenticated');
const router = express.Router();
const userController = require('../controllers/user');

//Get a list of all users
router.get('/', isAuthenticated, userController.getUsers);

//Get an event by it's id
router.get('/:id', isAuthenticated, userController.getUserById);

//Create a new event
router.post('/', isAuthenticated, userController.createUser);

//Update an event
router.put('/:id', isAuthenticated, userController.updateUser);

//Delete an event
router.delete('/:id', isAuthenticated, userController.deleteUser);

module.exports = router;