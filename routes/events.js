const express = require('express');
const router = express.Router();
const authorize = require('../controllers/authenticate');
const eventsController = require('../controllers/events');

//Get a list of all events
router.get('/',  eventsController.getEvents);

//Get an event by it's id
router.get('/:id', eventsController.getEventById);

//Create a new event
router.post('/', authorize.authUserLogin, eventsController.createEvent);

//Update an event
router.put('/:id', authorize.authUserLogin, eventsController.updateEvent);

//Delete an event
router.delete('/:id', authorize.authUserLogin, eventsController.deleteEvent);


module.exports = router;