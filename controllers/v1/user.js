const { model: userModel } = require('../../models/user')
const updateUserValidator = require('../../validators/updateUser')
const bcrypt = require("bcrypt")


module.exports.updateInfoUser = async (req, res) => {

    const { _id } = res.v_erifiedToken
    const reqBody = req.body

    const isValidInput = updateUserValidator(reqBody)

    if (isValidInput !== true)
        return res.json(isValidInput)


    for (field in reqBody)
        if (reqBody[field] === 'empty')
            delete reqBody[field]

    if (!Object.keys(reqBody).length)
        return res.json({
            message: "Enter at least one field to update",
            fields: "name, phone ...."
        })

    const { password, newPassword } = reqBody
    console.log(reqBody);

    if ((!(password && newPassword)) && (password || newPassword))
        return res.json({ message: "Enter Both fields new Password and newPassword" })

    if ((password === newPassword) && (password && newPassword))
        return res.json({ message: "The new password and the old password cannot be the same" })

    if (newPassword)
        reqBody.password = await bcrypt.hash(reqBody.newPassword, 10)

    delete req.body.newPassword

    try {
        // const updated = await userModel.findByIdAndUpdate(_id, reqBody)
        const updated = await userModel.updateOne({ _id }, reqBody)
        return res.json(updated)

    } catch (err) {
        return res.json({
            url: req.url,
            statusCode: 409,
            name: err.name,
            message: err.message || '',
        })
    }
}



module.exports.hashedPassword = async (req, res, next) => {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    next();
}

function checkPass(pass, hash) {
    return bcrypt.compareSync(pass, hash); // true
}