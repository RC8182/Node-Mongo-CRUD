require('dotenv').config();
const port= process.env.PORT;
const express= require('express');
const app=express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extends: false}));

// Conectamos con DB
dbStart=require('../DB/index.db');

// Enrutamos
app.use(require('../Routes/index.routes')); 


const Server= app.listen(port,()=>{
    console.log(`Server listen on Port ${port}`)
});

module.exports=Server