const Validator = require('fastest-validator')

const v = new Validator()

const schema = {
    title: {
        type: 'string',
    },
    // creator: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "user",
    // },
    // seenCount: {
    //     type: Number,
    //     
    // },
    // cover: {
    //     type: 'string',

    // },
    body: {
        type: 'string',

    },
    description: {
        type: 'string',
    }
    // category : {
    //category_article
    // },


}

module.exports = v.compile(schema)

console.log(v.compile(schema));                     
