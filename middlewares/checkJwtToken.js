const jwt = require('jsonwebtoken')
require('dotenv').config()



module.exports = (req, res, next) => {

    const accessToken = req.header('Authorization')?.split(" ")[1]
    
    if (!accessToken)
        return res.status(422).json({ message: "AccessToken does not exist" })


    // const accessToken = breareAccessToken.split(" ")[1]
    const verifiedToken = jwt.verify(accessToken, process.env.JWT_SECRET)

    res.v_erifiedToken = verifiedToken
// console.log(verifiedToken);
    next();
}