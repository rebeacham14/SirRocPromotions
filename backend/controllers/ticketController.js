const ticketModel = require('../models/ticketModel');
const mongoose = require('mongoose');
const stripe = require("stripe")(process.env.STRIPE_SECRET);



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




// Create a new ticket
const createTicket = async (req, res) => {



    // ---------------------set variables----------------------//
    // set variables -- ** same variable name required from BuyATicket (client)
    

    
    const { user, section, seats, price, seatPriceData, fighter } = req.body;

    const eachseat = seats.split("-")

    console.log(seats)
    const event="Mexico Independence Day"

    let ticketType="General-Admission"
    // if(section=="S"){ticketType="Standing"}else{ticketType="General-Admission"}





    // ---------------------recieve request----------------------//

    // console.log(seatPriceData)
    
    const line_items = eachseat.map((seat, idx) => (
        
        {
            "price_data": {
                "currency": 'usd',
                "unit_amount": seatPriceData[idx] * 100, // Amount in cents
                "product_data": {
                    "name": event,
                    "description": seat,
                },
            },
            "quantity": 1,

        }   

    ));


    const orderID = user.replace("@", "&").replace(".com", "") +"_"+ section +"_"+ seats +"_"+ price

    const orderURL = "https://sirrocpromotions.com/payment-success/?"+orderID
    console.log(orderURL);
    // console.log(section);

    try {


        // save to mongo db
        const newTicket = await ticketModel.create({
            "event":event,
            "user":user,
            "fighter":fighter,
            "ticketType":ticketType,
            "section":section,
            "seat":seats,
            "price":price
        });

        await newTicket.save();


        // create stripe session
        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            line_items: line_items,
            success_url: orderURL,
            cancel_url: 'https://sirrocpromotions.com/buyaticket/',
        });



        // console.log(session.id)

        res.json({ id: session.id });
        // res.json({ id: "after all backend" });

        


    } catch (error) {
        res.status(500).json({ error: error.message});
    }


};      

// create stripe checkout
const createCheckOutSession = async (req,res) => {
    
    // ** same variable name required from BuyATicket
    // const {section, seat, price} = req.body;
    

    // return res.status(404).json({ error: 'CheckOut not finished' });


}




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

