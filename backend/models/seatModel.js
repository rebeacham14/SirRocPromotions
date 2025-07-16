const mongoose = require('mongoose');
const User = require('./userModel'); 
// const Event = require('./eventModel'); 

// Define the schema for a ticket
const seatSchema = new mongoose.Schema({

    status: { type: String,enum : ['taken','available'], default: 'available', required: true },
    
    email: { type: String, required: true },

    section: { type: String, required: true },
    row: { type: String, required: true },
    seatNumber: { type: Number, required: true },

    price: { type: Number, required: true },

    date: { type: Date, required: false }
},

{
    timestamps: true
    // toJSON: { virtuals: true },
    // toObject: { virtuals: true }
}


);



// Create a model for the ticket
const Seat = mongoose.model('Seat', seatSchema);

module.exports = Seat;
