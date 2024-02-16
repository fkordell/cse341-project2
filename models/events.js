const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: [true, 'Please enter a title'] },
  description: { type: String, required: [true, 'Please enter a description'] },
  date: { type: String, required: [true, 'Please enter a date'],
    validate: {
      validator: function(v) {
        return /^\d{4}-\d{2}-\d{2}$/.test(v);
      },
      message: props => `${props.value} is not a valid date! Must be in YYYY-MM-DD format.`
    }
  },
  time: { type: String, required: [true, 'Please enter a time'],
    validate: {
      validator: function(v) {
        return /^(0?[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/i.test(v);
      },
      message: props => `${props.value} is not a valid time! Must be in "hh:mm AM" or "hh:mm PM" format.`
    }
  },
  location: { type: String, required: [true, 'Please enter a location'] }, 
  // organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  attendees: { type: Number, required: [true, 'Please enter the number of attendees'], min: 1 }, 
  updatedAt: { type: Date, default: Date.now } 
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
