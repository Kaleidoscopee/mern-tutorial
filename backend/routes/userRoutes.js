const express = require('express')
const router = express.Router()
const {registerUser, loginUser, getMe} = require('../controllers/userController')


//create a user
router.post('/', registerUser)
router.post('/login', loginUser)
router.post('/me', getMe)


module.exports = router