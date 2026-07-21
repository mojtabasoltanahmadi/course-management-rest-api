const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    // reply: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: "comment",
    //     required: true

    // },
    // {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'course',
    //     required: true
    // }],

    reply: {
        type: mongoose.Types.ObjectId,
        required: true

    },
    body: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: true
    },

    isAnswered: {
        type: Boolean,
        // default : false
    }

},
    { timestamps: true })



const model = mongoose.model("comment", schema)


module.exports = { model, schema }