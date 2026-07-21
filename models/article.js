const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: true,

    },
    seenCount: {
        type: Number,
        required: true,
    },
    cover: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }
    // category : {
    //category_article
    // },


}, { timestamps: true })

schema.virtual("comments",{
    ref : "coment",
    localField: "_id",
    foreignField: "reply", //or foreignField: "article"
})


module.exports = mongoose.model("article", schema)