

const mongoose = require('mongoose');

const User=require('./models/usermodel');

mongoose.connect('mongodb://127.0.0.1:27017/test').then(()=>(console.log("done")))
.catch(()=>{console.log("not")});

const user =new User({
    name:'woe',
    age:624,
});

user.save().then(()=>{
    console.log("save")
})