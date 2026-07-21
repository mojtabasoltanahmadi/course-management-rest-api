const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        // unique: true,
    },
    percent: {
        type: Number,
        min: 1,
        max: 100,
        required: true,
    },
    course: {
        type: mongoose.Types.ObjectId,
        ref: "course",
        required: true,
        // unique: true,
        ref: "course"
    },
    max: {
        type: Number,
        // min : 0,
        required: true,
    },
    uses: {
        type: Number,
        min: 0,
        required: true,
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true,
        ref: "user"
    },
},
    { timestamps: true })



const model = mongoose.model('off', schema)


module.exports = { model, schema }