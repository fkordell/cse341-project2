const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events');

//Get a list of all events
router.get('/', eventsController.listEvents);

//GEt an event by it's id
router.get('/', eventsController.getEventById);

//Create a new event
router.post('/', eventsController.createEvent);

//update an event
router.put('/', eventsController.updateEvent);

//Delete an event
router.delete('/', eventsController.deleteEvent);

module.exports = router;