const reactionstypeRepository = require('../repositories/reactionstypeRepository');
const httpStatus = require('../utils/statusCodes');
const ApiError = require('../utils/ApiError');

class reactionstypeService {
  async create(description) {
    return reactionstypeRepository.create(description);
  };
  async getAll() {
    return reactionstypeRepository.getAll();
  }; 
  async getById(id) {
    const findId = await reactionstypeRepository.getById(id);   
    if (!findId) throw new ApiError(httpStatus.NOT_FOUND,'Reactions type not found');
    return findId;
  };
  async delete(id) {
    await this.getById(id)
    return reactionstypeRepository.delete(id);
  };
};

module.exports = new reactionstypeService();
