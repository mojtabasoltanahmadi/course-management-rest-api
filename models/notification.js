const mongoose = require('mongoose')



const schema = new mongoose.Schema({
    from: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true
},
    message: {
    type: String,
    required: true
},
    person: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true
},
    seen: {
    type: Boolean,
    // default : false,
},
},
{ timestamps: true })



module.exports = mongoose.model('notification', schema)