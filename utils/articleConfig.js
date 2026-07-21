const articleValidaor = require('../validators/article')
const path = require('path')

module.exports = function (req, file, cb) {

    const check = articleValidaor(req.body)

    if (check !== true)
        return cb(new Error(JSON.stringify(check)))



    const extensionFile = path.extname(file.originalname)

    if (!['.jpg', '.jpeg', '.PNG'].includes(extensionFile))
        return cb(new Error("Enter valid format for cover _ jpg _ jpeg _ PNG"))

    cb(null, true)

}