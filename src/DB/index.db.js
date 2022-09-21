require('dotenv').config();
const mongo_credentials_url= process.env.MONGO_CREDENTIALS_URL;
const mongoose= require('mongoose');

const db={};
 db.connect= mongoose.connect(mongo_credentials_url);
 db.checkError= mongoose.connection.on('error', (error)=>{console.log(error)});
 db.checkConnection= mongoose.connection.once('connected', ()=>{console.log('Database connection established')});


module.exports= { db };