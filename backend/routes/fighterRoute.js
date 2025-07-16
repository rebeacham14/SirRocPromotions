const express = require('express'); 
const fighterModel = require('../models/fighterModel'); 

const{
    getAllFighters,
    getFighterById,
    createFighter,
    updateFighter,
    deleteFighter
} = require('../controllers/fighterController');


const router = express.Router();

// GET all Fighters
router.get('/', getAllFighters);

// GET a single Fighter by ID
router.get('/:id', getFighterById);

// POST a new Fighter
router.post('/', createFighter);

// PATCH an existing Fighter by ID
router.patch('/:id', updateFighter);

// DELETE a Fighter by ID
router.delete('/:id', deleteFighter);



module.exports = router;