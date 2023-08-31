const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware') //not required
const colors = require('colors') //not required
const { connect } = require('mongoose')
const port = process.env.PORT || 5000


const app = express()


connectDB()
//Middleware

//this middleware is used to get the body data
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//use goalRoutes to handle any endpoints that end with
app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
//user resource
 
//....
app.use(errorHandler)

//Port Listen Setup
// app.listen(port, () => console.log(`Server started on port ${port}`))  the tutorial way
//Ms Stitts way
app.listen(port, () =>{
    console.log(`server started on ${port}`);
})
