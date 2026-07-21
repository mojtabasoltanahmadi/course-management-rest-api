const { ObjectID } = require("mongoose")
const Validator = require('fastest-validator')
const v = new Validator()


const schema = {
    name: {
        type: 'string',
    },
    description: {
        type: 'string',
    },
    // cover: {
    //     type: 'string',
    // },
    support: {
        type: 'string',
    },
    href: {
        type: 'string',
    },
    price: {
        type: "currency",
        currencySymbol: "T"
    },
    status: {
        type: 'string', // complete - presell - ...
        enum: ["complete", "presell"]
    },
    discount: {
        type: "string",
    },
    categoryID: {
        type: 'string'
    },
    // creator: {
    //     type: 'string'
    // },
    
    $$strict: true
}



module.exports = v.compile(schema)


// categoryID: {
//     type: "objectID",
//     ObjectID
// },
// creator: {
//     type: "objectID",
//     ObjectID
// },


