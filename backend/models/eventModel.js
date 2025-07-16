const mongoose = require('mongoose');
const User = require('./userModel');
const Event = require('./eventModel'); // Assuming you have an Event model defined

// Define the schema for an event
const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },

});

// Create a model for the event
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
