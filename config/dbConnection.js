const mongoose = require('mongoose')
require('dotenv').config()
// require('dotenv').config({path: '../' + '.env'})


const URL = process.env.url


mongoose
    .connect(URL)
    .then(() => console.log('connect db mongod'))
    .catch(console.error)



// console.log(mongoose);
// console.log(URL);
// console.log(process.env);


    
    