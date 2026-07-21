const express = require('express')

const controller = require('../../controllers/v1/comment')

const router = new express.Router()




router
.route('/')
.post(controller.createComment)


module.exports = router