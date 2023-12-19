const ApiError = require("../utils/ApiError");
const httpStatus = require("../utils/statusCodes");

const validateSchema = (schema) => async (req, res, next) => {
    try {
        const { id } = req.params;
        const { principal_user_id, friend_id } = req.body;
        await schema.validate({
            id,
            principal_user_id,
            friend_id
        })
        next();
    } catch (error) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error);       
    };   
};

module.exports = validateSchema;
