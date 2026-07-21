const courseValidator = require('../validators/course')
const { isValidObjectId } = require('mongoose')


module.exports.fileFilter = function (req, file, cb) {
    const check = courseValidator(req.body)
    const { categoryID } = req.body

    if (check !== true)
        return cb(new Error(JSON.stringify(check)), false)

    if (!(isValidObjectId(categoryID)))
        return cb(new Error(JSON.stringify({
            message: 'Enter valid id',
            categoryID
        })))


    cb(null, true)
}
