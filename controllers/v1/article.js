const articleModel = require('../../models/article')


exports.create = async (req, res) => {

    if (!req.file)
        return res.json({ message: 'cover does not exists' })


    const { _id } = res.v_erifiedToken

    // console.log(req.body);
    // return res.json(req.file)
    const created = await articleModel.create({
        ...req.body,
        creator: _id,
        cover : req.file.filename,
        seenCount : 0
    })

    return res.status(201).json(created)

}