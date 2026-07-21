const categoryModel = require('../../models/category')
const categoryValidator = require('../../validators/categpry')
const { model: courseCategoryModel } = require('../../models/category_course')

const { isValidObjectId } = require('mongoose')


exports.getCategorys = async(req, res) => {
    const finded = await categoryModel.find()

    return res.json(finded)
}

exports.getCoursesWithCategory = async(req, res) => {
    const finded = await courseCategoryModel.find({category : res._id}, 'course').populate('course')

    if(!finded.length)
    return res.status(404).json({message : 'No course found with this category', category : res._id})

    res.json(finded)
}



exports.creatCategory = async (req, res) => {
    const { title, href } = req.body
    const check = categoryValidator(req.body)

    if (check !== true)
        return res.status(408).json(check)

    const create = await categoryModel.create({ title, href })
    res.json(create)
}


exports.selectCourseCategory = async (req, res) => {
    const { course } = req.body

    if (!isValidObjectId(course))
        return res.status(408).json({ message: `Enter valid course id`, course })

    const finded = await courseCategoryModel.findOne({ course, category: res._id }).lean()
    if (finded)
        return res.json({
            message: `course with this id : ${course} and this category : ${res._id} exist in the resource`
        })

    const create = await courseCategoryModel.create({ course, category: res._id })
    res.json(create)


}