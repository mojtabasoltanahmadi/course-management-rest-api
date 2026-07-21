const express = require('express')
const router = new express.Router()
const multer = require('multer')
const controller = require('../../controllers/v1/contactUs')
const uploader = require('../../utils/uploader') // config for multer constructor
const fileFilter = require('../../utils/contactConfig') 

require("dotenv").config()
const path = require("path")

router
    .route('/')
    .post(multer({
         storage: uploader(path.join(process.env.DIR_PATH, "./public/contact")),
            fileFilter
        }).single('contactFile'), controller.contactUs)



module.exports = router


