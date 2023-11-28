const httpStatus = require('../utils/statusCodes');
const validation = (schema) => async (req, res, next) => {
    const {
        description, user_id, post_id
    } = req.body;
    await schema.validate({
        description, 
        user_id,
        post_id
    })
    next();
};

module.exports = { validation };
