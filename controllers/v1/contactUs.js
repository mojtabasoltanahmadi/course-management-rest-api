const contactUsValidator = require('../../validators/contactUs')
const contactUsModel = require('../../models/contactUs')

exports.contactUs = (req, res) => {

    const check = contactUsValidator(req.body)
    // if(!req.file)

    if (check !== true)
        return res.json(check)

    // contactUsModel.create(req.body)


}