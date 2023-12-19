const Repository = require('../repositories/userRepository');
const ApiError = require("../utils/ApiError");
const httpStatus = require("../utils/statusCodes");
const HashService = require("./cryptoService")

class UserService {
  async create(full_name, email, password) {
    const isEmailTaken = await Repository.getByEmail(email);
    if (isEmailTaken) throw new ApiError(httpStatus.CONFLICT,'Email already taken.');
    const hashedPassword = await HashService.hash(password);
    return Repository.create(full_name, email, hashedPassword);
  };
  async getById(id) {
    if(!id) throw new ApiError(httpStatus.NOT_FOUND, 'Id not provid');
    const user = await Repository.getById(id);
    if (!user) throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    return user;
  };
  async isEmailTaken(email) {
    const existingUser = await Repository.getByEmail(email);
    return !!existingUser;
  };
  async getAll() {
    return Repository.getAll();
  };
  async update(id, full_name, email) {
    const user = await Repository.getById(id);
    if (!user) throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    const isEmailTaken = await this.isEmailTaken(email);
    if (isEmailTaken) throw new ApiError(httpStatus.CONFLICT,'Email already taken.');
    return Repository.update(id, full_name, email);
  };
  async delete(id) {
    const user = await Repository.getById(id);
    if (!user) throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
    return Repository.delete(id);
  };
};

module.exports = new UserService();
