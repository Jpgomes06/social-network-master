const bcrypt = require('bcrypt');
const httpStatus = require('../utils/statusCodes');
const ApiError = require('../utils/ApiError');
const userRepository = require('../repositories/userRepository');
const hashService = require('../services/hashService')

class authService {
  async loginUser (email, password) {
    const user = await userRepository.getByEmail(email);   
    if(!user) throw new ApiError(httpStatus.UNAUTHORIZED,'Email not found');
    const isValidPassword = await hashService.compare(password, user.password);   
    if(!isValidPassword) throw new ApiError(httpStatus.UNAUTHORIZED,'Incorrect password');              
    return user;
  };      
}; 

module.exports = new authService();
