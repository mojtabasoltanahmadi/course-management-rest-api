const mongoose = require("mongoose")


const schema = new mongoose.Schema({
    title: {
        type: 'string',
        required: true
    },
    href: {
        type: 'string',
        required: true,
        // unique: true,
    }
}, { timestamps: true})



// module.exports = { model , schema}
module.exports = mongoose.model('categories', schema)