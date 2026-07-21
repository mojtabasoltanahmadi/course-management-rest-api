const express = require('express')

const controller = require('../../controllers/v1/user')


const router = new express.Router()




router
// .use(findUser)
    .route('/update')
    .put(controller.updateInfoUser)


// router
//     .use(
//         controller.checkId,
//         controller.checkUser)









module.exports = router