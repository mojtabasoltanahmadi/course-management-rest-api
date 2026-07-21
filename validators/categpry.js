const Validator = require("fastest-validator")

const v = new Validator


const schema = {
    href: 'string',
    title: 'string',

    $$strict : true
}

module.exports = v.compile(schema)
