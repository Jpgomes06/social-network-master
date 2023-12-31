const httpStatus = require('../utils/statusCodes');

const validation = (schema) => async (req, res, next) => {
    const {
        principal_user_id, friend_id
    } = req.body;
    await schema.validate({
        principal_user_id,
        friend_id
    })
    next();
};

module.exports = { validation };
