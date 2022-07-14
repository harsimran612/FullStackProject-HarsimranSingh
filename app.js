const express = require("express");
const app = express(); 

const db = require('./db/connection')

db.once('open', () => {
    console.log('Successfully connected to database!!')
    const server = app.listen(8080,()=>console.log("listening"));
})

app.use(express.static("public"));

app.use(express.json()) 
app.use(express.urlencoded({extended:true}));

// GET and POST API routes
app.post('/', (req,res) => {
    
})

