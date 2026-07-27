const express = require('express')

const controller = require('../../controllers/v1/notification')
const checkId = require('../../middlewares/checkId')

const router = new express.Router()





router
    .use('/:id', checkId)
    .route('/:id')
    .post(controller.createNotification)


router
    .route('/')
    .get(controller.getNotification)




module.exports = router



