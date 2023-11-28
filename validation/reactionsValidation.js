const yup = require('yup');
const reactionsSchema = yup.object({
    user_id: yup.number().required(),
    reactions_type_id: yup.number().required(),
    post_id: yup.number().required()
});

module.exports =  reactionsSchema;
