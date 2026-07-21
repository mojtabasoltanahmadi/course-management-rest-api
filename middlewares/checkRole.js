const { model: userModel } = require('../models/user')


module.exports = async (req, res, next) => { //isAdmin

    const { _id } = res.v_erifiedToken

    const finded = await userModel.findById(_id)

    if (!finded?.role.startsWith("ADMIN") && finded?.role !== 'OWNER')
        return res.status(403).json({
            message: 'You are not allowed',
            role: finded?.role
        })



    const accessibleFeatures = finded.role.split("_")
    res.r_oleFeatures = accessibleFeatures;
    // res.json(finded)
    // console.log(accessibleFeatures);
    // console.log(role);
    next();
}