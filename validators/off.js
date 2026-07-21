const Validator = require("fastest-validator");
const { isValidObjectId } = require("mongoose");

const v = new Validator({
    useNewCustomCheckerFunction: true, // using new version
    messages: {
        // Register our new error message text
        course: 'Course field is required'
    }
});


const schema = {
    code: {
        type: 'string',
    },
    percent: {
        type: 'number',
        min: 1,
        max: 100,
    },
    course: {
        type: "custom",
        // minWeight: 10,
        check(value, errors, schema) {
            if (!isValidObjectId(value)) errors.push({ type: "objectId", expected : "valid objectId",actual: value });
            return value;
        }
    },
    max: {
        type: 'number',
        // min : 0,
    },
    uses: {
        type: 'number',
        min: 0,
        default : 0
    },
    // creator: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'user',

    // },

    $$strict: true

}




module.exports = v.compile(schema)
