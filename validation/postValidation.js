const yup = require('yup');
const postSchema = yup.object({
    description: yup.string().required(), 
    user_id: yup.number().required(), 
    target_id: yup.number().required(),
    type_id: yup.number().required()
});

module.exports =  postSchema;
