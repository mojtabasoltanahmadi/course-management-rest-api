const express = require('express')
const checkId = require('../../middlewares/checkId')
const controller = require("../../controllers/v1/category")
// const controller = require("../../middlewares/checkRole")

const router = new express.Router()








router
    .use('/:id', checkId)
    .route('/:id')
    .get(controller.getCoursesWithCategory)
    .post(controller.selectCourseCategory)









router
    .route('/')
    .post(controller.creatCategory)
    .get(controller.getCategorys)









module.exports = router