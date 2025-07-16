const express = require('express'); 
const eventModel = require('../models/eventModel'); 


const router = express.Router();

// GET all events
router.get('/', (req, res) => {
    res.json({msg: 'Welcome to the Event API'});
});


// Patch an existing event by ID
router.patch('/:id', (req, res) => {
    const eventId = req.params.id;
    const updatedEvent = req.body;
    res.json({msg: 'Update event', eventId: eventId, updatedEvent: updatedEvent});
});

// Delete an event by ID
router.delete('/:id', (req, res) => {
    const eventId = req.params.id;
    res.json({msg: 'Delete event', eventId: eventId});
});

module.exports = router;