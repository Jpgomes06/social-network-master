const yup = require('yup');

const createTargetPublicSchema = yup.object({
    type: yup.string().required()   
});

const getByIdSchema = yup.object({
    id: yup.number().required()   
});

module.exports =  { createTargetPublicSchema, getByIdSchema };

