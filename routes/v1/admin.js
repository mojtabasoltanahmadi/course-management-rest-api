const express = require('express')

const controller = require('../../controllers/v1/admin')
const checkRole = require('../../midllewars/checkRole')

const router = new express.Router();

router.use(checkRole)


router.get('/list', controller.lstUsers)
router.delete('/identifier/:identifier', controller.rmWithIdentifier) //identifier === phone, email or id


// router.use("/:id",
//     controller.checkId,
//     controller.checkUser,)

router
    .use("/:id",
        controller.checkId,
        controller.checkUser)
    .route('/:id')
    .get(controller.getUserWithId)
    .post(controller.banUser)         
    .delete(controller.delWithId)
    .put(controller.changeRole)

    



module.exports = router;