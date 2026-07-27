const Validator = require('fastest-validator')
// const { ObjectID } = require("mongodb")

// const v = new Validator({
//     defaults: {
//         objectID: {
//             ObjectID
//         }
//     }
// })

const v = new Validator

const schema = {
    reply: 'string',

    body: {
        type: 'string',
        min: 4,
        max: 1e50,
    },

    // user: 'string',


    $$strict: true
}



module.exports = v.compile(schema)

// console.log(schema);

