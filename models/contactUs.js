const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    subject: {
        type: String,
        enum: [
            'Support',
            'Offer',
            'Criticism or complaints',
            'Warranty inquiry',
            'Management'],
        required: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },

},
    { timestamps: true })




module.exports = mongoose.model('contact', schema);

