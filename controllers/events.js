const mongodb = require('../db/connect');
// const ObjectId = require('mongodb').ObjectId;

const listEvents = async (req, res) => {
    const result = await mongodb.getDb().db().collection('events').find();
    result.toArray().then((lists) =>  {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    })
}

const getEventById = async (req, res) => {

}

const createEvent = async (req, res) => {
    try{
        const newEvent = {
            eventName: req.body.eventName,
            eventDate: req.body.eventDate,
            paymentRecieved: req.body.paymentRecieved,
            customerName: req.body.customerName
        }
        const result = await mongodb.getDb().db().collection('events').insertOne(newEvent);
        if (result.acknowledged) {
          res.status(201).json(result);
        } else {
          res.status(500).send('Event was not made');
        }
      } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).send('Internal Server Error');
      }
}

const updateEvent = async (req, res) => {

}

const deleteEvent = async (req, res) => {

}


module.exports = {listEvents, getEventById, createEvent, updateEvent, deleteEvent}