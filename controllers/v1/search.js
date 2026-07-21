const courseModel = require('../../models/course')


exports.search = async(req, res) => {
    const { keyword } = req.params
    console.log(keyword);


    const finded = await courseModel.find({name : {$regex : `.*${keyword}.*`}})

    if(!finded.length)
    return res.json({message : "course with this href not found"})


    return res.json(finded)


}



