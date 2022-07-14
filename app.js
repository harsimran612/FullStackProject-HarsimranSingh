const express = require("express");
const app = express(); 

// const db = require('./db/connection')

// Listen to the app on a port here
// db.once('open', () => {
//     console.log('Successfully connected to database!!')
//     const server = app.listen(8080,()=>console.log("listening"));
// })

const server = app.listen(process.env.PORT || 8080, ()=>console.log("Listening on 8080"));

// Statically serve the public folder here
app.use(express.static("public"));

// the following two lines are needed to pass the data to MongoDB in JSON format
// app.use(express.json()) 
// app.use(express.urlencoded({extended:true}));

//require the database schema here
// const { mid } = require('./models/Todo.js')

//GET and POST API routes
// app.post('/', (req,res) => {
    
// })

