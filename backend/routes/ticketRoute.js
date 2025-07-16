const express = require('express'); 
const ticketModel = require('../models/ticketModel'); 

const{
    getAllTickets,
    getTicketById,
    createTicket,
    createCheckOutSession,
    updateTicket,
    deleteTicket
} = require('../controllers/ticketController');


const router = express.Router();

// GET all tickets
router.get('/', getAllTickets);

// GET a single ticket by ID
router.get('/:id', getTicketById);

// POST / BUY a new ticket
router.post('/', createTicket);

router.post('/create-checkout-session', createCheckOutSession);

// PATCH an existing ticket by ID
router.patch('/:id', updateTicket);

// DELETE a ticket by ID
router.delete('/:id', deleteTicket);





module.exports = router;