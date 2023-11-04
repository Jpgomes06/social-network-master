const bcrypt = require('bcrypt')
const httpStatus = require('../utils/statusCodes');
const ApiError = require('../utils/ApiError');
const userRepository = require('../repositories/userRepository');

class authService {
  async loginUser (email, password) {
    const user = userRepository.getByEmail(email);
    if(!user) throw new ApiError(httpStatus.UNAUTHORIZED,'Email not found');
    const isValidPassword = await bcrypt.compare(password, user.password);    
    if(!isValidPassword) throw new ApiError(httpStatus.UNAUTHORIZED,'Email not found');              
  };      
}; 

module.exports = new authService();
