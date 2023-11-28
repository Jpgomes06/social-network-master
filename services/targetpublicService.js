const targetpublicRepository = require('../repositories/targetpublicRepository');
const httpStatus = require('../utils/statusCodes');
const ApiError = require('../utils/ApiError');

class targetpublicService {
  async create(type) {
    return targetpublicRepository.create(type);   
  };
  async getAll() {
    return targetpublicRepository.getAll();
  }; 
  async getById(id) {
    const findId = await targetpublicRepository.getById(id);   
    if (!findId) throw new ApiError(httpStatus.NOT_FOUND,'Target public not found');
    return findId;
  };
  async delete(id) {
    await this.getById(id); 
    return targetpublicRepository.delete(id);
  };
};

module.exports = new targetpublicService();
