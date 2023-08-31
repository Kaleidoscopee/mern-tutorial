const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/uderModel')

const protect = asyncHandler(async(req, res, next)=>{
    let token;
    // Check auth headers object
    if(req.header.authorization && req.header.authorization.startWith('Bearer')){
        try {
            token = req.header.authorization.split(' ')
                try {
                    token = req.headers.authorization.split(' ')[1]
                    
                    //verify token
                    const decoded = jwt.verify(token, process.env.JWT_SECRET)

                    //get user from the token
                    req.user = await User.findById(decoded.id)

                }catch(error) {
                    console.log(error)
                    res.status(401)
                    throw new Error('Not authorized')
                }
        }
        if(!token){
            res.status(401)
            throw new Error('Not authorized, no token')
        }
})