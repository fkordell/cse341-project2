const Event = require('../models/events'); 


exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find() 
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching events', error: err });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching event', error: err });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const newEvent = new Event({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      time: req.body.time,
      location: req.body.location,
      attendees: req.body.attendees
    });

    const result = await newEvent.save(); 

    res.status(201).json(result);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ message: 'Validation failed', errors: error.errors });
    } else {
      console.error('Error creating event:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error });
    }
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const updateData = {
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      time: req.body.time,
      location: req.body.location,
      attendees: req.body.attendees
    };

    const updatedEvent = await Event.findByIdAndUpdate(eventId, updateData, { new: true, runValidators: true });

    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json(updatedEvent);
  } catch (error) {
    if (error.name === 'ValidationError') {
      res.status(400).json({ message: 'Validation failed', errors: error.errors });
    } else {
      console.error('Error updating event:', error);
      res.status(500).json({ message: 'Internal Server Error', error: error });
    }
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting event', error: err });
  }
};


