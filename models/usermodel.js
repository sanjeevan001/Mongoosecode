
const mongoose = require('mongoose');

const puppySchema = new mongoose.Schema({
    
    name:String,
    age: Number
  });
  
  const usermodel = mongoose.model('Puppy', puppySchema);

  module.exports=usermodel