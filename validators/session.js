const Validator = require('fastest-validator')

const v = new Validator

const schema = {
    title: {
        type: 'string',  
    },
    time: {
        type: 'string',   
    },
    // course: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'courses',
    //     
    // },
    free: {
        type: 'enum',
        values : [true , false],
        default : false
    },

    // video : {
    //     type : 'string',
    //     

    // }

    $$strict : true
}



module.exports = v.compile(schema)