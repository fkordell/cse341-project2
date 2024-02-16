const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events');

//Get a list of all events
router.get('/', eventsController.getEvents);

//GEt an event by it's id
router.get('/:id', eventsController.getEventById);

//Create a new event
router.post('/', eventsController.createEvent);

//update an event
router.put('/:id', eventsController.updateEvent);

//Delete an event
router.delete('/:id', eventsController.deleteEvent);

module.exports = router;