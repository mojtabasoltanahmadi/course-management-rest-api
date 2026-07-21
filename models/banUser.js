const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true,
    }
},
    { timestamps: true })

const model = mongoose.model('banUser', schema)


module.exports = { schema, model }
