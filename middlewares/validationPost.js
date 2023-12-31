const httpStatus = require('../utils/statusCodes');
const validation = (schema) => async (req, res, next) => {
    const {
        description, user_id, target_id, type_id
    } = req.body;
    await schema.validate({
        description, 
        user_id,
        target_id,
        type_id
    })
    next();
};

module.exports = { validation };
