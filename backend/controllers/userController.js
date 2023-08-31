//@desc     Register new user
//@route    POST /api/users
//@access   Public
const registerUser = (req, res) => {
    res.json({message: 'Register User'})
}

//@desc     Register new user
//@route    POST /api/users
//@access   Public
const loginUser = (req, res) => {
    res.json({message: 'Login User'})
}

//@desc     Register new user
//@route    POST /api/users
//@access   Public
const getMe = (req, res) => {
    res.json({message: 'User Data display'})
}

module.exports = {
    registerUser,
    loginrUser,
    getMe
}