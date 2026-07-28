const sessionValidator = require('../validators/session')


module.exports = function (req, file, cb) {

    if (req.body.free === "true")
        req.body.free = true;


    const check = sessionValidator(req.body)


    if (check !== true)
        return cb(new Error(JSON.stringify(check)))

    cb(null, true)

}