const fighterModel = require('../models/fighterModel');
const mongoose = require('mongoose');


// Get all fighters
const getAllFighters = async (req, res) => {
    try {
        const fighters = await fighterModel.find({}).sort({createdAt: -1});
        res.status(200).json(fighters);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Get a single fighter by ID
const getFighterById = async (req, res) => {
    const { id } = req.params;
    
    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid fighter ID format' });
    }

    // Find the fighter by ID
    try {
        const fighter = await fighterModel.findById(id);
        if (!fighter) {
            return res.status(404).json({ error: 'Fighter not found' });
        }
        res.status(200).json(fighter);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Create a new fighter
const createFighter = async (req, res) => {
    const { name, picture, age, weightClass, record } = req.body;

    // get logged in user
    // user = user.req;

    
    

    try {
        const newFighter = await fighterModel.create({
            name,
            picture,
            age,
            weightClass,
            record,
        });
        await newFighter.save();
        res.status(200).json({msg: 'Create new fighter', fighter: newFighter});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};      

// Update an existing fighter by ID
const updateFighter = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;


    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid fighter ID format' });
    }

    // Validate the updates
    if (!updates || Object.keys(updates).length === 0) {
        return res.status(400).json({ error: 'No valid updates provided' });
    }

    try {
        const updatedFighter = await fighterModel.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedFighter) {
            return res.status(404).json({ error: 'Fighter not found' });
        }
        res.status(200).json(updatedFighter);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};  

// Delete a fighter by ID
const deleteFighter = async (req, res) => {
    const { id } = req.params;

    // Validate the ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid fighter ID format' });
    }

    try {
        const deletedFighter = await fighterModel.findByIdAndDelete(id);
        if (!deletedFighter) {
            return res.status(404).json({ error: 'Fighter not found' });
        }
        res.status(200).json({ message: 'Fighter deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};

// Export the controller functions
module.exports = {
    getAllFighters,
    getFighterById,
    createFighter,
    updateFighter,
    deleteFighter
};

