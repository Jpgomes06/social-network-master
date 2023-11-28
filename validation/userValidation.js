const yup = require('yup');
const userSchema = yup.object({
    full_name: yup.string().required(),
    email: yup.string().email().required(),
    email: yup.string().required()    
});

module.exports =  userSchema;
