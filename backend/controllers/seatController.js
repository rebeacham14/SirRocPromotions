const seatModel = require('../models/seatModel');
const mongoose = require('mongoose');

// Get all seats
const getAllSeats = async (req, res) => {
    try {
        const seats = await seatModel.find({}).sort({createdAt: -1});
        res.status(200).json(seats);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Get a single seat by ID
const getSeatById = async (req, res) => {
    const { id } = req.params;
    
    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid seat ID format' });
    }

    // Find the seat by ID
    try {
        const seat = await seatModel.findById(id);
        if (!seat) {
            return res.status(404).json({ error: 'seat not found' });
        }
        res.status(200).json(seat);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Create a new seat
const createSeat = async (req, res) => {
        
    // ** same variable name required from BuyASeat
    const { seatSection, seatRow, seatSeat, seatFighter } = req.body;
    
    // check of 



    const username = req.body.seatSection;

    console.log(username)
    
    // const event, user, seatType, price, date
    // const seatRow = seatNumber.(--first letter--)




    // let seatType, price, tax;


    //     switch (seatSection){
    //         case "S":
    //             seatType = "Standing";
    //             price = "60.00"
    //             break;
    //         case "A":
    //         case "B":
    //         case "C":
    //         case "D":
    //         case "E":
    //             seatType = "General-Admission";
    //             price = "67.50"
    //             break;
    //         case "F2":
    //         case "F3":
    //         case "F4":
    //         case "F5":
    //             seatType = "Table";
    //             price = "800.00"
    //             break;
    //         case "G":
    //             seatType = "General-Admission";
    //             price = "115.00"
    //             break;
                
    //     }

    //     switch (seatRow){
    //         case "A":
    //         case "B":
    //             tax = "25.00"
    //             break;

    //     }







        // event, user, seatType, price, date


    // get logged in user
    // const user = req.user;









//     try {
//         const newSeat = await seatModel.create({
//             event,
//             user,
//             fighter,
//             seatType,
//             seat,
//             price,
//             date
//         });
//         await newSeat.save();
//         res.status(200).json({msg: 'Create new seat', seat: newSeat});
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }

};      



// Update an existing seat by ID
const updateSeat = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;


    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid seat ID format' });
    }

    // Validate the updates
    if (!updates || Object.keys(updates).length === 0) {
        return res.status(400).json({ error: 'No valid updates provided' });
    }

    try {
        const updatedSeat = await seatModel.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedSeat) {
            return res.status(404).json({ error: 'Seat not found' });
        }
        res.status(200).json(updatedSeat);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};  


// Delete a seat by ID
const deleteSeat = async (req, res) => {
    const { id } = req.params;

    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid seat ID format' });
    }

    try {
        const deletedSeat = await seatModel.findByIdAndDelete(id);
        if (!deletedSeat) {
            return res.status(404).json({ error: 'Seat not found' });
        }
        res.status(200).json({ message: 'Seat deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};

// Export the controller functions
module.exports = {
    getAllSeats,
    getSeatById,
    createSeat,
    updateSeat,
    deleteSeat
};

