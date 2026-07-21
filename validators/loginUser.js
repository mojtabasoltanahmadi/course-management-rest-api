const Validator = require('fastest-validator')


const v = new Validator()

const schema = {
    phone : {
        type: 'string',
        min: 11,
        max: 11,
        default : false,
    },
    email: {
        type: 'email',
        min: 10,
        max: 100,
        default : false,
        // unique: true,
    },
    // phoneOrEmail: [
    //     {
    //         type: 'string',
    //         min: 11,
    //         max: 11,
    //         // default: false,
    //     },
    //     {
    //         type: 'email',
    //         min: 10,
    //         max: 100,
    //         // default: false,
    //         // unique: true,
    //     }
    // ],
    //phoneOrEmail === identifier



    password: {
        type: 'string',
        min: 8,
        max: 24,
    },

    $$strict: true
}


module.exports = v.compile(schema)
