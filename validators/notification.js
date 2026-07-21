const Validator = require("fastest-validator")

const v = new Validator


const schema = {
    message: 'string',
    // person: 'string',
    

    $$strict : true
}

module.exports = v.compile(schema)
