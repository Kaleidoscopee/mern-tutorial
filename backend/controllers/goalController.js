const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

//@desc   Get goals
//@route  GET /api/goals
//@access Private
const getGoals = (req, res) => {
const goals = await Goal.findBy({})

    res.status(200).json({ message: 'Get goals' })
}


//@desc   Set goals
//@route  POST /api/goals
//@access Private
const setGoals = (req, res) => {
    //     console.log(req.body)
    // res.status(200).json({ message: 'Set goals' })
if(!req.body.text){
    res.status(400)
    throw new Error('Please add a text ')
}
const goals = await Goal.find({
    text : req.body.text
})

    res.status(200).json(goal)
}




//@desc   Update goals
//@route  POST /api/goals
//@access Private
const updateGoals = (req, res) => {
    res.status(200).json({ message: `Update goals ${req.params.id}` })
}

//@desc   delete goals
//@route  DELETE /api/goals
//@access Private
const deleteGoals = (req, res) => {
    res.status(200).json({ message: `Delete goals ${req.params.id}` })
}

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}