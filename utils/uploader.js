//config for upload files 
const multer = require('multer')
const path = require('path')



module.exports = function(dest) {
    return multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, dest)
            // cb(null, 'C:/Users/pc/Desktop/vsc/to browes/public/courses/covers')
        },
        filename: function (req, file, cb) {
            const fileName = `${file.fieldname}-${file.originalname.split('.')[0]}-${Date.now()}${Math.random()}`;
            const extensionFile = path.extname(file.originalname)
    
            cb(null, `${fileName}${extensionFile}`)
        },
    })
}


// module.exports.fileFilter = function (req, file, cb) {
//     const extensionFile = path.extname(file.originalname)

//     if (!['.jpg', '.jpeg', '.PNG'].includes(extensionFile))
//         return cb(new Error("Enter valid format for cover _ jpg _ jpeg _ PNG"))
// }







// const maxSize = 2e6;

// const uploader = multer({
//     storage,
//     // limits: { fileSize: maxSize }
//     fileFilter
// })

// module.exports = uploader


