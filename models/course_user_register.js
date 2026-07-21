const mongoose = require("mongoose")


const schema = new mongoose.Schema({
    course: {
        type: mongoose.Types.ObjectId,
        ref: 'course',
        required: true

    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true

    },
    price: {
        type: Number,
        required: true
    }
},
{ timestamps: true })



module.exports = mongoose.model("courseUser", schema)
