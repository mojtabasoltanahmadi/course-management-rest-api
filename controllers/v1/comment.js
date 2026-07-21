const { model: commentModel } = require("../../models/comment")
const commentValidator = require("../../validators/comment")
const { isValidObjectId } = require('mongoose')


exports.createComment = async(req, res) => {

    const { reply } = req.body

    if (!(isValidObjectId(reply)))
        return res.status(408).json({
            message: "Enter Valid ObjectId for field replay"
        })

    const check = commentValidator(req.body)

    if (check !== true)
        return res.status(408).json(check)

    const { _id } = res.v_erifiedToken

    const create = await commentModel.create({...req.body, user : _id})
    res.json(create)
    // const finded = await commentModel.findById("66dca20d616a9983c1689c9c").populate("reply")
    // res.json(finded)


}