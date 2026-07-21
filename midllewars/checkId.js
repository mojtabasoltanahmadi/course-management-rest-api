
const { isValidObjectId } = require('mongoose')




module.exports = (req, res, next) => {
    const { id } = req.params;

    if (!isValidObjectId(id))
        return res.status(422).json({ message: 'id is not valid' });




    res._id = id;
    next();
}