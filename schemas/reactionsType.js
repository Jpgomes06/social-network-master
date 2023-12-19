const yup = require('yup');

const createReactiontypeSchema = yup.object({
    description: yup.string().required()   
});

const getByIdSchema = yup.object({
    id: yup.number().required()   
});

module.exports =  { createReactiontypeSchema, getByIdSchema };

