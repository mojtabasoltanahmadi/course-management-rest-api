const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    course: {
        type: mongoose.Types.ObjectId,
        ref: 'course',
        required: true

    },
    free: {
        type: Boolean,
        required: true

    },

    video: {
        type: String,
        required: true

    },

}, { timestamps: true })

const model = mongoose.model('session', schema)



module.exports = { model, schema }