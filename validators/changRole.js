const Validator = require('fastest-validator')

const v = new Validator()


const schema = {

    getUserWithId: {
        type: "boolean",
        default: false
    },

    banUser: {
        type: "boolean",
        default: false
    },

    delWithId: {
        type: "boolean",
        default: false
    },

    changeRole: {
        type: "boolean",
        default: false
    },

    $$strict: true

}



module.exports = v.compile(schema)