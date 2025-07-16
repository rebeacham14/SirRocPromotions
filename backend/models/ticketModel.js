const mongoose = require('mongoose');
const User = require('./userModel'); 
const Seat = require('./seatModel'); 
// const Event = require('./eventModel'); 

// Define the schema for a ticket
const ticketSchema = new mongoose.Schema({
  event: { type:String, required: true },
  
  user: { type: String, required: true },
  fighter: { type: String, required: true },

  ticketType: { type: String, enum:['Standing', 'General-Admission', 'Table'], required: true },
  
  section: { type: String, required:true},
  seat: { type: String},

  price: { type: Number, required: true },
},

{
    timestamps: true
    // toJSON: { virtuals: true },
    // toObject: { virtuals: true }
}


);



// Create a model for the ticket
const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
