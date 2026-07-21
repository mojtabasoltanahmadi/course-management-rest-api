const express = require('express')

const controller = require('../../controllers/v1/search')

const router = new express.Router()

router
    .route("/:keyword")
    .get(controller.search)


module.exports = router
