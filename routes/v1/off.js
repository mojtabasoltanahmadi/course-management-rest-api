const express = require('express')

const controller = require('../../controllers/v1/off')
const checkRole = require('../../midllewars/checkRole')

const router = new express.Router()



// router
//     .route('/')
//     .get(controller.getAll)
//     .post(controller.create)



router
    .route('/all')
    .post(checkRole, controller.setOnAll)


router
    .route('/')
    .post(checkRole, controller.create)

router
    .route('/:code')
    .post(controller.checkCodeOff) //get One


module.exports = router








