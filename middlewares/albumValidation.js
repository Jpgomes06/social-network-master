const ApiError = require("../utils/ApiError");
const httpStatus = require("../utils/statusCodes");

const validateSchema = (schema) => async (req, res, next) => {
    try {
        const { id } = req.params;
        const { description, target_id } = req.body;
        await schema.validate({
            id,
            description,
            target_id
        })
        next();
    } catch (error) {
        throw new ApiError(httpStatus.BAD_REQUEST, error);        
    };
};

module.exports = validateSchema;
