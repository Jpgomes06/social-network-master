const UserRepository = require('../repositories/userRepository');
const hashService = require('./hashService');
const httpStatus = require('../utils/statusCodes');
const ApiError = require('../utils/ApiError');

class UserService {
  async create(full_name, email, password) {
    const emailAlreadyExists = await UserRepository.getByEmail(email);
    if (emailAlreadyExists) throw new ApiError(httpStatus.CONFLICT,'Email already exists');
    const hashedPassword = await hashService.hash(password);  
    return UserRepository.create(full_name, email, hashedPassword);
  };
  async getById(id) {
    const findId = await UserRepository.getById(id);   
    if (!findId) throw new ApiError(httpStatus.NOT_FOUND,'User not found');
    return findId;
  };
  async TokenFind(token) {
    const tokenBd = await UserRepository.tokenPr(token); 
    if (!tokenBd) throw new ApiError(httpStatus.NOT_FOUND,'Token not found');
    return tokenBd;
  };
  async getAll() {
    return UserRepository.getAll();
  };
  async update(id, full_name, email) {
    return UserRepository.update(id, full_name, email);
  };
  async delete(id) {
    await this.getById(id);  
    return UserRepository.delete(id);
  };
};

module.exports = new UserService();
