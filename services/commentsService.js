const commentsRepository = require('../repositories/commentsRepository')
const httpStatus = require('../utils/statusCodes');
const ApiError = require('../utils/ApiError');

class commentsService {
  async create(description, user_id, post_id) {
    const post = await commentsRepository.create(description, user_id, post_id);
    const commentsAlreadyExists = await commentsRepository.getByid(description, user_id, post_id);
    if (commentsAlreadyExists) throw new ApiError(httpStatus.CONFLICT,'Email already exists');
    return post;
  };
  async getByid(id) {    
    const comments = commentsRepository.getByid(id);
    if (!comments) throw new ApiError(httpStatus.NOT_FOUND, 'Comments not found');
    return comments;
  };
  async getAll() {
    return commentsRepository.getAll();
  };
  async update(id, description, user_id, post_id) {
    await this.getById(id);
    return commentsRepository.update(id, description, user_id, post_id);
  };
  async delete(id) {
    await this.getById(id);
    return commentsRepository.deleteUp(id, false);
  };
};

module.exports = new commentsService();
