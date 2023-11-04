const bcrypt = require('bcrypt')
const httpStatus = require('../utils/statusCodes');
const ApiError = require('../utils/ApiError');
const userRepository = require('../repositories/userRepository');

class HashService {
  async hash (password) { return bcrypt.hash(password, 10) };      
}; 

module.exports = new HashService();
