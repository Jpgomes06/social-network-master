const yup = require('yup');
const commentsSchema = yup.object({
    description: yup.string().required(), 
    user_id: yup.number().required(),
    post_id: yup.number().required()
});

module.exports =  commentsSchema;
