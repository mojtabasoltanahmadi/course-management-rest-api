const express = require('express');
const controller = require('../../controllers/v1/auth');



const router = express.Router()




router
    .post('/register',
        controller.userValidatorCheck,
        controller.checkBaned,
        controller.hashedPassword,
        controller.creatUserInDb,
        controller.createAccessToken,
        controller.responseRegister)

router
    .post('/login',
        controller.loginUserValidatorCheck,
        controller.checkBaned,
        controller.findUserDb,
        controller.checkPassword,
        controller.createAccessToken,
        controller.responseLogin)
router
    .post('/me', controller.getMe)



module.exports = router;



//localhost:4000/v1/...

