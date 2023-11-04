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
    return UserRepository.getById(id);
  };
  async getAll() {
    return UserRepository.getAll();
  };
  async update(id, full_name, email) {
    return UserRepository.update(id, full_name, email);
  };
  async delete(id) {
    return UserRepository.delete(id);
  };
};

module.exports = new UserService();
