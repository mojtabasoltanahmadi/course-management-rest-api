const { isValidObjectId } = require('mongoose')
const courseModel = require('../../models/course')
const offerValidator = require('../../validators/off')
const { model: offModel } = require('../../models/off')

exports.setOnAll = async (req, res) => {

    const { discount } = req.body

    if (!discount)
        return res.status(408).json({ message: 'Field discount is required' })

    const updated = await courseModel.updateMany({ discount })

    return res.json(updated)

}


exports.create = async (req, res) => {

    // const { course } = req.body

    // if (!course)
    //     return res.json({ message: 'Course field is required' })

    // if (!isValidObjectId(course))
    //     return res.json({ message: 'Course must be valid objectId' })

    const check = offerValidator(req.body)

    if (check !== true)
        return res.json(check)

    const { code, course } = req.body
    const finded = await offModel.findOne({ code, course })

    if (finded)
        return res.status(408).json({ message: "This code is included with this course" })

    const { _id } = res.v_erifiedToken
    const create = await offModel.create({ ...req.body, creator: _id })

    res.json(create)

}

exports.checkCodeOff = async (req, res) => {
    const { code } = req.params
    const { course } = req.body

    if (!(code && course))
        return res.json({ message: "Course and code fields are required" })

    if (!isValidObjectId(course))
        return res.json({ message: "Enter valid ObjectId", actual: course })


    const finded = await offModel.findOne({ code, course })

    if (!finded)
        return res.json({ message: "offerCode with this course is not exist" })

    // return res.json(finded)

    // if(finded.uses === finded.max)
    // return res.json({message : "The ceiling of this discount code has been filled"})


    const updated = await offModel.updateOne({
        code, course, uses: { $lt: finded.max }
    }, { uses: finded.uses += 1 })

   if(!updated.matchedCount) //Because Yuz is not less than Max
    return res.json({message : "The ceiling of this discount code has been filled"})

    res.json(updated)
}