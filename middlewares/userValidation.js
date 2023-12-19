const ApiError = require("../utils/ApiError");
const httpStatus = require("../utils/statusCodes");

const validateSchema = (schema) => async (req, res, next) => {
    try {
        const { full_name, email, password } = req.body;
        const {id} = req.params;
        await schema.validate({
            id,
            full_name,
            email, 
            password
        })
        next();
    } catch (error) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, error);        
    };
};

module.exports = validateSchema;
