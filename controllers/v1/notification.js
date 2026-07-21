const notificationModel = require('../../models/notification')
const { model: userModel } = require('../../models/user')



exports.createNotification = async (req, res) => {
    const { message } = req.body

    if (!message)
        return res.json({ message: "field message is required" })

    const { _id } = res.v_erifiedToken

    const finded = await userModel.findOne({ _id: res._id })

    if (!finded)
        return res.json({ message: `user with this id : ${res._id} not found` })

    // console.log({ message, person: res._id, from: _id });

    const created = await notificationModel.create({ message, person: res._id, from: _id })
    return res.json(created)

}

exports.getNotification = async (req, res) => {
    const { _id } = res.v_erifiedToken;

    const finded = await notificationModel.find({ person: _id , seen :  { $exists: false }})

    if(!finded.length)
    return res.json({message : "You have no new message", messages : finded})


    const updated = await notificationModel.updateMany({ person: _id }, {seen : true})
    

    res.json(finded)
}