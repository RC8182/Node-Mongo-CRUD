require('dotenv').config();
const mongo_credentials_url= process.env.MONGO_CREDENTIALS_URL;
const mongoose= require('mongoose');

const connect= mongoose.connect(mongo_credentials_url);
const checkError= mongoose.connection.on('error', (error)=>{console.log(error)});
const checkConnection= mongoose.connection.once('connected', ()=>{console.log('Database connection established')});


module.exports= {connect, 
    checkError, 
    checkConnection };