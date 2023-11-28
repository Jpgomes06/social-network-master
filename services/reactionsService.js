const reactionsRepository = require('../repositories/reactionsRepository')
const httpStatus = require('../utils/statusCodes');
const ApiError = require('../utils/ApiError');

class reactionsService {
  async create(user_id, reactions_type_id, post_id) {
    const reactionsAlreadyExists = await reactionsRepository.getById(user_id);
    if(reactionsAlreadyExists) throw new ApiError(httpStatus.CONFLICT,'Reactions already exists');
    return reactionsRepository.create(user_id, reactions_type_id, post_id);    
  };
  async getAll() {
    return reactionsRepository.getAll();
  };
  async getById(id) {
    const findId = await reactionsRepository.getById(id);   
    if (!findId) throw new ApiError(httpStatus.NOT_FOUND,'Reactions not found');
    return findId;
  };
  async update(id, user_id, reactions_type_id, post_id) {
    await this.getById(id);
    return reactionsRepository.update(id, user_id, reactions_type_id, post_id);
  };    
  async delete(id) {
    await this.getById(id);
    return reactionsRepository.delete(id);
  };
};

module.exports = new reactionsService();
