const express = require('express');
const isAuthenticated = require('../middleware/isAuthenticated');
const router = express.Router();
const eventsController = require('../controllers/events');

//Get a list of all events
router.get('/', isAuthenticated, eventsController.getEvents);

//Get an event by it's id
router.get('/:id', isAuthenticated, eventsController.getEventById);

//Create a new event
router.post('/', isAuthenticated, eventsController.createEvent);

//Update an event
router.put('/:id', isAuthenticated, eventsController.updateEvent);

//Delete an event
router.delete('/:id', isAuthenticated, eventsController.deleteEvent);

module.exports = router;