const mongoose = require('mongoose');
const Seat = require('./seatModel'); 

const userSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.ObjectId, required: true},
    
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    
    seats: [{ type: mongoose.Schema.ObjectId, ref: "Seat" }],

    role: {type: String, enum:["admin", "user"], default:"user"},
    createdAt: { type: Date, default: Date.now }

});


// Create a model for the user
const User = mongoose.model('User', userSchema);

module.exports = User;