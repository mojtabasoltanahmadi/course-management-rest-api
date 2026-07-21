const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    course: {
        type: mongoose.Types.ObjectId,
        ref: 'course',
        required: true,
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'category',
        required: true,
    }
},
    { timestamps: true })

const model = mongoose.model('categoryCourse', schema)


module.exports = { schema, model }
