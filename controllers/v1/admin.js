const { model: banModel } = require('../../models/banUser')
const { model: userModel } = require('../../models/user')

const { isValidObjectId } = require('mongoose')

const checkRoleValidator = require('../../validators/changRole')


module.exports.changeRole = async (req, res) => {

    const findedRole = res.o_bject.role;

    if (!checkAccessibleFeatures(res, "changeRole"))
        return;

    const { getUserWithId, banUser, delWithId, changeRole } = req.body

    if (!(getUserWithId || banUser || delWithId || changeRole) && findedRole === "USER")
        return res.json({
            message: "At least one field is required",
            features: "Features is : getUserWithId, banUser, delWithId, changeRole",
            role: findedRole,
        })


    const check = checkRoleValidator(req.body);

    if (check !== true)
        return res.json(check)



    if (findedRole.startsWith("OWNER"))
        return res.json({
            role: "OWNER",
            message: `you cannot change this role ;)`
        })

    let selectedFeatures = '';

    // const roleFeatures = findedRole.split('_');
    // for (const feature in req.body)
    //     if (req.body[feature] === true) {
    //         if (!roleFeatures.filter(roleFeature => roleFeature === feature).length)
    //             selectedFeatures += `_${feature}`
    //     }
    //     else { }

    // let finalyRole = '';
    // if (findedRole.startsWith("USER"))
    //     finalyRole = "ADMIN" + selectedFeatures;

    // else
    //     finalyRole = findedRole + selectedFeatures;

    for (const feature in req.body)
        if (req.body[feature] === true && res.r_oleFeatures.filter(roleFeature => roleFeature === feature).length)
                if (feature !== "changeRole" || res.r_oleFeatures[0] === "OWNER")
                    selectedFeatures += `_${feature}`



    let finalyRole = ''
    if (!selectedFeatures) finalyRole = "USER";
    else finalyRole = "ADMIN" + selectedFeatures

    const updated = await userModel.updateOne({ _id: res._id }, { role: finalyRole })
    res.json({
        _id: res._id,
        ...updated,
        finalyRole,
        features: req.body
    })
    // const updated = await userModel.findByIdAndUpdate(res._id, { role:  })
    // res.json(updated)
}


module.exports.delWithId = async (req, res) => {

    if (!checkAccessibleFeatures(res, "delWithId"))
        return;

    const deleted = await userModel.findByIdAndDelete(res._id).select('-password').lean()
    res.json({ deleted })
}

module.exports.rmWithIdentifier = async (req, res) => {
    const { identifier } = req.params

    if (isValidObjectId(identifier)) {
        const deleted = await userModel.deleteOne({ _id: identifier })

        if (!deleted.deletedCount)
            return res.json({ message: `no exist user with _id : ${identifier}`, ...deleted })

        return res.json({ message: `deleted by _id : ${identifier}`, ...deleted })
    }


    const deleted = await userModel.deleteOne({
        $or: [{ phone: identifier }, { email: identifier }]
    })

    if (!deleted.deletedCount)
        return res.json({ message: `no exist user with phone or email : ${identifier}`, ...deleted })

    return res.json({ message: `deleted by phone or email ${identifier}`, ...deleted })
}



module.exports.lstUsers = async (req, res, next) => {

    const usersFinded = await userModel.find().select('-password').lean()

    if (!usersFinded.length)
        return res.status(404).json({ message: 'There is no user' })

    res.json(usersFinded)
}


function isAccessibleFeatures(roleFeatures, accessfeatures) {
    const accessibleFeatures = roleFeatures.filter(
        features => features === "OWNER" || features === accessfeatures)

    if (accessibleFeatures.length)
        return true;

    return false;
}


function checkAccessibleFeatures(res, accessfeatures) {
    const accessibleFeatures = res.r_oleFeatures

    if (!isAccessibleFeatures(accessibleFeatures, accessfeatures)) {
        res.json({ accessibleFeatures })
        return false
    }

    return true
}

module.exports.getUserWithId = async (req, res) => {

    if (!checkAccessibleFeatures(res, "getUserWithId"))
        return;
    // const { id } = req.params
    res.json(res.o_bject)
}



module.exports.checkId = (req, res, next) => {
    const { id } = req.params;

    if (!isValidObjectId(id))
        return res.status(422).json({ message: 'id is not valid' });


    res._id = id;
    next();
}

module.exports.checkUser = async (req, res, next) => {
    const finded = await userModel.findOne({ _id: res._id })

    if (!finded)
        return res.status(404).json({ message: "user is not exist" })

    res.o_bject = finded;
    next()
}




module.exports.banUser = async (req, res) => {

    if (!checkAccessibleFeatures(res, "banUser"))
        return;

    const { phone, email } = res.o_bject

    try {
        const created = await banModel.create({ user: res._id, phone, email })
        res.status(201).json(created)
    } catch (err) {
        return res.json({
            url: req.url,
            statusCode: 409,
            name: err.name,
            message: err.message || '',
            // message: 'The user has already been banned'
        })
    }
    // console.log(res.f_inded);
    // const err = await isErr(
    //     "banModel.create({ user: res._id, phone: res.f_inded.phone, res.f_inded.email })",
    //     req, res)

    // if (err.err)
    //     return res.json(err)

    // res.json(err)


}

async function isErr(str, req, res) {
    try {
        const check = await eval(str)
        return check;

    } catch (err) {
        return {
            name: err.name,
            message: err.message || '',
            err: true
        }
    }
}



