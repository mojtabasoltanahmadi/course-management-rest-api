
// const courseValidator = require('../../validators/course')
// const { isValidObjectId } = require('mongoose')
const courseModel = require('../../models/course')
const { model: sessionModel } = require('../../models/sesion')
const courseUserModel = require('../../models/course_user_register')


exports.userRegisteredThisCourse = async (req, res) => {

    const finded = await courseModel.findOne({ href: req.params.href })

    if (!finded)
        return res.status(404).json(
            { message: 'Course not available with this href' })


    const { _id } = res.v_erifiedToken
    const courseUserFinded = await courseUserModel.findOne({ course: finded._id, user: _id })

    if (!courseUserFinded)
        return res.json({ message: "The user has not registered for this course" })

    return res.json({message : 'You are a student of this course'})
}

exports.registerCourse = async (req, res) => {
    const { _id } = res.v_erifiedToken
    const { price } = req.body


    const isUserAlreadyRegistered = await courseUserModel
        .findOne({
            user: _id,
            course: res._id,
        })
        .lean();

    if (isUserAlreadyRegistered)
        return res.status(409).json({
            message: "User already registered in this course",
        });


    if (!price || !(typeof price === 'number'))
        return res.status(401).json({ message: "Enter valid number price", typePrice: typeof price })

    const created = await courseUserModel.create({ price, user: _id, course: res._id })

    res.status(201).json({ message: "created succefully", created })

}



exports.lastSessions = async (req, res, next) => {
    const _id = "66d813a4a22b843104a4a496"
    let { updatedAt } = await sessionModel.findById(_id).lean()

    console.log(updatedAt);

    const finded = await sessionModel.find({
        $or: [
            { createdAt: { $gt: updatedAt } },
            { updatedAt: { $gt: updatedAt } }
        ]
    }).lean().sort({ updatedAt: -1 })

    console.log(finded);
    console.log(finded.length);

    if (!finded.length)
        return next();

    console.log(finded[0].updatedAt);

    const updated = await sessionModel.updateOne({ _id }, { updatedAt: finded[0].updatedAt })
    console.log(updated);

    next()
}









module.exports.checkCourse = async (req, res, next) => {
    const finded = await courseModel.findOne({ _id: res._id })

    if (!finded)
        return res.status(404).json({ message: "user is not exist" })

    res.o_bject = finded;
    next()
}



module.exports.creatSession = async (req, res, next) => {

    if (!req.file)
        return res.json({ message: 'video does not exists' })

    req.body.course = res._id
    req.body.video = req.file.filename


    // console.log(req.body, req.file);
    const create = await sessionModel.create(req.body)

    res.json({ ...create.toObject(), course: res.o_bject, video: req.file })

}



exports.creatCourse = async (req, res, next) => {

    if (!req.file)
        return res.json({ message: 'cover does not exists' })

    const { _id } = res.v_erifiedToken;
    req.body.cover = req.file.filename;
    req.body.creator = _id;

    const create = await courseModel.create(req.body)
    res.json({ create, cover: req.file })

}

