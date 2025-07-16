const mongoose = require('mongoose');

// Define the schema for a fighter
const fighterSchema = new mongoose.Schema({
  
  name: { type: String, required: true },
  picture: {data: Buffer, type: String},
  age: { type: Number, required: true },
  weightClass: { type: String, required: true },
  record: { type: String, required: true },

});

// Create a model for the fighter
const Fighter = mongoose.model('Fighter', fighterSchema);

module.exports = Fighter;



// controller for img+user...
// const user = require('../models/user');
// var User = require('../models/user');


// exports.get_user = async (req, res, next) => {
//     const { username, password } = req.body;
//     let user_obj = await User.findOne({ username: username, password: password })
//     res.status(200).json(user_obj);
// }

// exports.create_user = async (req, res, next) => {
//     const { first, last, username, password, img} = req.body;
//     const user_obj = new User({ first: first, last: last, username, password,img: req.file.filename});
     
     
//     await user_obj.save();
//     res.status(200).json('user creation succeded');
// }