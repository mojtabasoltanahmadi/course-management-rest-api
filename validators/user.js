const Validator = require('fastest-validator')


const v = new Validator()

const schema = {
    username: {
        type: 'string',
        min: 3,
        max: 100,
    },
    name: {
        type: 'string',
        min: 3,
        max: 255,
    },
    email: {
        type: 'email',
        min: 10,
        max: 100,
        unique: true,
    },
    password: {
        type: 'string',
        min : 8,
        max : 24,
    },
    confirmPassword: {
        type: "equal",
        field: "password"
    },
    phone: {
        type: 'string',
        min : 11,
        max : 11,
    },
    // role:
    // {
    //     type: "enum",
    //     values: ["USER", "ADMIN"],
    //     default: "USER",
    // },

    $$strict: true
}


module.exports = v.compile(schema)
