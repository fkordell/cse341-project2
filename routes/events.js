const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const router = express.Router();
const eventsController = require('../controllers/events');

//Get a list of all events
router.get('/',  eventsController.getEvents);

//Get an event by it's id
router.get('/:id', eventsController.getEventById);

//Create a new event
router.post('/', requiresAuth(), eventsController.createEvent);

//Update an event
router.put('/:id', requiresAuth(), eventsController.updateEvent);

//Delete an event
router.delete('/:id', requiresAuth(), eventsController.deleteEvent);

module.exports = router;