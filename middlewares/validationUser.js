const httpStatus = require('../utils/statusCodes');
const bcrypt = require('bcrypt');

const validation = (schema) => async (req, res, next) => {
    const {
     full_name, email, password
    } = req.body;
    await schema.validate({
      full_name, email, password
    })
    next();
};

module.exports = { validation };
