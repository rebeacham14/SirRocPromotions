const ticketModel = require('../models/ticketModel');
const mongoose = require('mongoose');
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

// Get all tickets
const getAllTickets = async (req, res) => {
    try {
        const tickets = await ticketModel.find({}).sort({createdAt: -1});
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Get a single ticket by ID
const getTicketById = async (req, res) => {
    const { id } = req.params;
    
    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ticket ID format' });
    }

    // Find the ticket by ID
    try {
        const ticket = await ticketModel.findById(id);
        if (!ticket) {
            return res.status(404).json({ error: 'Ticket not found' });
        }
        res.status(200).json(ticket);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



const createCheckOutSession = async (req,res) => {
    
    // ** same variable name required from BuyATicket
    const {section, seat, price} = req.body;
    

    return res.status(404).json({ error: 'CheckOut not finished' });


}


// Create a new ticket
const createTicket = async (req, res) => {
    // list of all tickets
    // const list = await ticketModel.find({})
        
    // ** same variable name required from BuyATicket
    const { user, section, seats, price, seatPriceData, fighter } = req.body;


    const eachseat = seats.split("-")

    const event="Mexico Independence Day"

    let ticketType=""
    if(section=="S"){ticketType="Standing"}else{ticketType="General-Admission"}


    const line_items = eachseat.map(s, idx => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: s.toString(),
            },
            unit_amount: seatPriceData[idx] * 100, // Amount in cents
        },
        quantity: 1,
    }));


    const orderID = ""+ user +"_"+ section +"_"+ seats +"_"+ price


    try {
        // create new mongo db entry
        const newTicket = await ticketModel.create({
            "event":event,
            "user":user,
            "fighter":fighter,
            "ticketType":ticketType,
            "section":section,
            "seat":seat,
            "price":price,
        });
        await newTicket.save();



        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: line_items,
            mode: 'payment',
            success_url: 'https://sirrocpromotions.com/payment-success/?'+orderID,
            cancel_url: 'https://sirrocpromotions.com/buyaticket/',
        });

        res.json({ id: session.id });

        
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};      



// Update an existing ticket by ID
const updateTicket = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;


    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ticket ID format' });
    }

    // Validate the updates
    if (!updates || Object.keys(updates).length === 0) {
        return res.status(400).json({ error: 'No valid updates provided' });
    }

    try {
        const updatedTicket = await ticketModel.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedTicket) {
            return res.status(404).json({ error: 'Ticket not found' });
        }
        res.status(200).json(updatedTicket);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};  

// Delete a ticket by ID
const deleteTicket = async (req, res) => {
    const { id } = req.params;

    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ticket ID format' });
    }

    try {
        const deletedTicket = await ticketModel.findByIdAndDelete(id);
        if (!deletedTicket) {
            return res.status(404).json({ error: 'Ticket not found' });
        }
        res.status(200).json({ message: 'Ticket deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};

// Export the controller functions
module.exports = {
    getAllTickets,
    getTicketById,
    createCheckOutSession,
    createTicket,
    updateTicket,
    deleteTicket
};



