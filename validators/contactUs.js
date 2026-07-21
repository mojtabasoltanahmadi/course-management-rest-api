const Validator = require('fastest-validator')


const v = new Validator()


const schema = {
    subject: {
        type: "string",
        enum: [
            'Support',
            'offer',
            'Criticism or complaints',
            'Warranty inquiry',
            'Management'],
    },
    email: {
        type: "email",
    },
    name: {
        type: "string",
    },
    phone: {
        type: "string",
        min: 11,
        max: 11,
    },
    body: {
        type: "string",
        max: 2e45,
    },
}


module.exports = v.compile(schema)