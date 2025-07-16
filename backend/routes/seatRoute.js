const express = require('express'); 
const seatModel = require('../models/seatModel'); 

const{
    getAllSeats,
    getSeatById,
    createSeat,
    updateSeat,
    deleteSeat
} = require('../controllers/seatController');


const router = express.Router();

// GET all seats
router.get('/', getAllSeats);

// GET a single seat by ID
router.get('/:id', getSeatById);

// POST / BUY a new seat
router.post('/', createSeat);

// router.post('/create-checkout-session', createCheckOutSession);

// PATCH an existing seat by ID
router.patch('/:id', updateSeat);

// DELETE a seat by ID
router.delete('/:id', deleteSeat);



module.exports = router;