const mongoose = require('mongoose')

const goalchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' //name of the model
    },
    text: {
        type: String,
        required: [true, 'Please add a text value']
    },
    timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema)