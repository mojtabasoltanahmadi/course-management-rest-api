const express = require('express');
const app = express();

const path = require('path')

const authRouter = require('./routes/v1/auth')
const adminRouter = require('./routes/v1/admin')
const userRouter = require('./routes/v1/user')
const courseRouter = require('./routes/v1/course')
const categoryRouter = require('./routes/v1/category')
const commentRouter = require('./routes/v1/comment')
const contactUsRouter = require('./routes/v1/contactUs')
const searchRouter = require('./routes/v1/search')
const notificationRouter = require('./routes/v1/notification')
const offRouter = require('./routes/v1/off')



const checkJwtToken = require('./midllewars/checkJwtToken')
const isItJwtToken = require('./midllewars/isItJwtToken')

require('dotenv').config()
require('./config/dbConnection')


app.use(express.json())
app.use(express.urlencoded({ extended: true }));



// const upload = require('multer')
// ({dest : `C:/Users/pc/Desktop/vsc/to browes/public/avatar`})
// const upload = require('./midllewars/multer')


// app.post('/upload', upload.single('avatar'), (req, res) => {
//     // console.log(req.body);
//     res.json(req.file)
// })

// app.get('/:id/:id', (req, res) => {
//     console.log(req.params);
// })


// app.use(express.static())


const PORT = process.env.PORT;



// app.post('/formData', (req, res, next) => {
//     console.log(req.file);
// })

// app.use('/', checkJwtToken)

const nodemailer = require('nodemailer')

app.post('/answer', async (req, res) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "programx9x@gmail.com",
            pass: process.env.NODEMAILER_PASS,
        },
    })

    const option = {
        from: 'me academi ;))',
        to: 'msa8225@gmail.com',
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    }
    // from: "example@gmail.com",
    // to: req.body.email,
    // text: req.body.answer,

    transporter.sendMail(option, (err, info) => {
        if (err)
            return console.error(err);

        res.json(info)
    })

})


app.use('/v1/auth', isItJwtToken, authRouter)
app.use('/v1/admin', checkJwtToken, adminRouter)
app.use('/v1/users', checkJwtToken, userRouter)
app.use('/v1/course', checkJwtToken, courseRouter)
app.use('/v1/comments', checkJwtToken, commentRouter)
app.use('/v1/category', checkJwtToken, categoryRouter)
app.use('/v1/contact-us', contactUsRouter)
app.use('/v1/search', searchRouter)
app.use('/v1/notification', checkJwtToken, notificationRouter)
app.use('/v1/off', checkJwtToken, offRouter)


const articleRouter = require('./routes/v1/article')
app.use('/v1/article', articleRouter)








// app.get('/', (req, res) => {
//     console.log(req.header('authorization'));
// })



// handel server err

app.use((err, req, res, next) => {
    try {
        err.message = JSON.parse(err.message)
        return res.json({
            url: req.url,
            name: err.name,
            message: err.message || '',
        })
    } catch (error) {
        return res.json({
            url: req.url,
            name: err.name,
            message: err.message || '',
        })
    }
})

app.listen(PORT, (err) => {
    if (err) {
        res.json({
            // url: req.url,
            name: err.name,
            message: err.message || '',
            status: 500
        })
    }
    else console.log(`Server Run Port ${PORT}`);
})


