const yup = require('yup');

const createCommentsSchema = yup.object({
    description: yup.string().required(),
    user_id: yup.number().integer().required(),
    post_id: yup.number().integer().required()
});

const updateCommentsSchema = yup.object({
    id: yup.number().integer().required(),
    description: yup.string(),
    user_id: yup.number().integer(),
    post_id: yup.number().integer()
});

const getByIdSchema = yup.object({
    id: yup.number().integer().required()
});

module.exports =  { createCommentsSchema, updateCommentsSchema, getByIdSchema };