const express = require('express')
const controller = require('../../controllers/v1/article')
const router = new express.Router()
const multer = require('multer')
require('dotenv').config()
const uploader = require('../../utils/uploader')(process.env.DIR_PATH + "/public/article/covers")
const fileFilter = require('../../utils/articleConfig')
const checkJwtToken = require('../../middlewares/checkJwtToken')
const checkRole = require('../../middlewares/checkRole')


router
    .route('/')
    .post(checkJwtToken, checkRole, multer({
        storage: uploader,
        fileFilter,
    }).single('cover'), controller.create)








module.exports = router