const express = require('express')

const checkRole = require('../../middlewares/checkRole')
const controller = require('../../controllers/v1/course')
const multer = require('multer')
const uploader = require('../../utils/uploader') // config for multer constructor
const checkId = require('../../middlewares/checkId')
const sessionValidator = require('../../utils/sessionConfig')
const courseValidator = require('../../utils/courseConfig')

require('dotenv').config()
// console.log(process.env.DIR_PATH + '/public/courses/covers');


const router = new express.Router()



router
    .route('/:href').get(controller.userRegisteredThisCourse)


router
    .use("/:id", checkId)
// .post(controller.addComment)

router
    .route('/:id/register')
    .post(controller.registerCourse)

router
    .route('/:id/sessions')
    .post(checkRole,
        controller.checkCourse,
        multer({
            storage: uploader(process.env.DIR_PATH + '/public/courses/videos'),
            fileFilter: sessionValidator
        }).single('video'),
        controller.creatSession)


router
    .route('/')
    .post(checkRole,
        multer({
            storage: uploader(process.env.DIR_PATH + '/public/courses/covers'),
            fileFilter: courseValidator, limits: { maxSize: 2e8 }
        }).single('cover'),
        controller.creatCourse)



router.use(checkRole)
//last sessions
router.use(controller.lastSessions)



module.exports = router;


// console.log(multer(multer({ storage, fileFilter, limits: { maxSize: 2e9 } }))) 