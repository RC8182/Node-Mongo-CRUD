const mongoose = require('mongoose');

const userSchema= mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type:String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: false
    },
    email:{
        type: String,
        required: false
    }
});
const Users=mongoose.model('Users', userSchema)
module.exports= Users;
