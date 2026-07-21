const path = require('path')
const { model: userModel } = require('../../models/user')
const userValidator = require('../../validators/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { model: banUser } = require('../../models/banUser')
const loginUserValidator = require('../../validators/loginUser')


require('dotenv').config()

module.exports.checkVerifiedToken = (req, res, next) => {
    // if(res.v_erifiedToken)
    res.json({message : "user "})
}

// const userRouter = require('../../routes/v1/auth')




// module.exports.register = async (req, res, next) => {

//     const checked = userValidator(req.body)

//     if (checked === true) {

//         // const { email, username, phone } = req.body;
//         if (!await isUserExists(req.body)) {
//             const created = await userModel.create(req.body);
//             res.json(created)
//         } else res.json({ message: "user is exists" })

//     } else res.json(checked)
// }


module.exports.userValidatorCheck = (req, res, next) => {
    const checked = userValidator(req.body)

    if (checked !== true)
        return res.status(422).json(checked);

    next()
}


module.exports.checkBaned = async (req, res, next) => {
    const { phone, email } = req.body;
    const finded = await banUser.findOne({
        $or: [{ phone }, { email }]
    })
    if (finded)
        return res.json({ message: `user is banned` });

    next();
}



module.exports.creatUserInDb = async (req, res, next) => {
    // if (await isUserExists(req.body))
    //     return res.status(409).json({ message: "user is exists" })
    try {
        // req.body.password = hashedPassword(req.body.password)
        const created = await userModel.create(req.body);
        // res.json(created);
        // cosnt createdObject = 
        const createdObject = created.toObject();
        delete createdObject.password;
        res._user = createdObject;
        next();

    } catch (err) {
        return res.json({
            url: req.url,
            statusCode: 409,
            name: err.name,
            message: err.message || '',
        })
    }
}



module.exports.loginUserValidatorCheck = (req, res, next) => {

    const { phone, email } = req.body
    const resultvalidation = loginUserValidator(req.body)

    if (resultvalidation !== true)
        return res.json(resultvalidation)

    if (phone && email)
        return res.json({ message: 'one field required' })

    next();
}

module.exports.findUserDb = async (req, res, next) => {

    const { phone, email } = req.body;

    const finded = await userModel.findOne({
        $or: [{ phone }, { email }]
    })

    if (!finded)
        return res.status(404).json({ message: "user not found" })

    res._user = finded;
    next()
}

module.exports.checkPassword = (req, res, next) => {
    if (!checkPass(req.body.password, res._user.password))
        return res.status(403).json({ message: "password is not corect" })

    next();

}

module.exports.responseLogin = (req, res) => {
    res.status(201).json({ accessToken: res.a_ccessToken })
}

// module.exports.login = async (req, res) => {

//     res.status(404).json({ message: "successefully logged" })

// }

module.exports.getMe = (req, res) => {

}

module.exports.hashedPassword = (req, res, next) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    next();
}


module.exports.createAccessToken = (req, res, next) => {
    const accessToken = jwt.sign({ _id: res._user._id }, process.env.JWT_SECRET, { expiresIn: '3s' })
    res.a_ccessToken = accessToken;
    next();
}


module.exports.responseRegister = (req, res) => {
    res.status(201).json({ ...res._user, accessToken: res.a_ccessToken })
}

async function isUserExists(reqBody) {
    const { email, username, phone } = reqBody;
    return await userModel.findOne({ $or: [{ email }, { username }, { phone }] }).lean();
}


function checkPass(pass, hash) {
    return bcrypt.compareSync(pass, hash); // true
}


