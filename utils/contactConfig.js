const contactUsValidator = require('../validators/contactUs')

module.exports = function (req, file, cb) {
   
    const check = contactUsValidator(req.body)

    if (check !== true)
        return cb(new Error(JSON.stringify(check)))

    cb(null, true)

}