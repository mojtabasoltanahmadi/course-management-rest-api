const validator = require('fastest-validator')



const v = new validator()

const schema = {
    username: {
        type: 'string',
        min: 3,
        max: 100,
        default: 'empty',
    },
    name: {
        type: 'string',
        min: 3,
        max: 255,
        default: 'empty',
    },
    email: {
        type: 'email',
        min: 10,
        max: 100,
        unique: true,
        default: 'empty',

    },
    password: {
        type: 'string',
        min: 8,
        max: 24,
        default: 'empty',
    },
    newPassword: {
        type: 'string',
        min: 8,
        max: 24,
        default: 'empty',
    },
    phone: {
        type: 'string',
        min: 11,
        max: 11,
        default: 'empty',
    },

    $$strict: true
}






module.exports = v.compile(schema)