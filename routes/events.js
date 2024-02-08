const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events');

//Get a list of all events
router.get('/', eventsController.listEvents);

//Create a new event
router.post('/', eventsController.createEvent);

module.exports = router;