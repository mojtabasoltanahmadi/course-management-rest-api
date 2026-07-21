const jwt = require('jsonwebtoken')
require('dotenv').config()


// module.exports = (req, res, next) => {

//     const accessToken = req.header('Authorization')?.split(' ')[1]

//     const verifiedToken = jwt.verify(accessToken, process.env.JWT_SECRET)

//     res.v_erifiedToken = verifiedToken
//     next()

// }


module.exports = (req, res, next) => {

    const accessToken = req.header('Authorization')?.split(' ')[1]

    try {
        const verifiedToken = jwt.verify(accessToken, process.env.JWT_SECRET)
        return res.json(verifiedToken)
        // return res.json({message : 'accessToken is valid you do not need to register or login'})

    } catch (err) {
        next()
    }


}