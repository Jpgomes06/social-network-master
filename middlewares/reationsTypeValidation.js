const ApiError = require("../utils/ApiError");
const httpStatus = require("../utils/statusCodes");

const validateSchema = (schema) => async (req, res, next) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        await schema.validate({
            id,
            description
        })
        next();
    } catch (error) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error);        
    };
};
 
module.exports = validateSchema;
