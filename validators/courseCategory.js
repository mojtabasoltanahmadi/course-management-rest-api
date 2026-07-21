const Validator = require('fastest-validator')


const v = new Validator()

const schema = {
    // course : 'string',
    href : 'string',
    

    $$strict: true
}


module.exports = v.compile(schema)
