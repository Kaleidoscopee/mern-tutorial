const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs') //hash our passwords
const asyncHandler = require('express=async=handler')
const User = require('../models/userModel')


//@desc     Register new user
//@route    POST /api/users
//@access   Public
const registerUser = asyncHandler(async(req, res) => {
    //send body data
    const {name, email, password} = req.body
    //if there is no name, emai, or pw
    if(!name || !email || !password) {
        res.stats(400)
        throw new Error('Please add all fields')
    }

    //check if user exists
    const userExists = await User.findOne({email})
    if(userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    //hash the password - bcrypt
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            id: user.id,
            name: user.name,
            email: user.email
            token: generateToken(user._id)
        })
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }

 
    // res.json({message: 'Register User'})
})

//@desc     Register new user
//@route    POST /api/users
//@access   Public
const loginUser = asyncHandler(async(req, res) => {
    const user = await User.findOne({email});
    //compare the plain text pw with the bcrypt pw
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(400);
        throw new Error("Invalid credentials");
    }


    // res.json({message: 'Login User'})
})

//@desc     Register new user
//@route    POST /api/users
//@access   Public
const getMe = asyncHandler(async(req, res) => {
    const { _id, name, email } = await User.findById(req.user.id)
    
    res.status(200).json({
        id: _id,
        name,
        email
    })
    
})

//generate JWT (go back to video)
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        rxpiresIn: '30d'
    })
} 

module.exports = {
    registerUser,
    loginrUser,
    getMe
}