const postRepository = require('../repositories/postRepository')
const httpStatus = require('../utils/statusCodes');
const ApiError = require('../utils/ApiError');

class postService {
  async create(description, user_id, target_id, type_id) {
    return postRepository.create(description, user_id, target_id, type_id);   
  };
  async getById(id) {
    const post = await postRepository.getById(id);
    if (!post) throw new ApiError(httpStatus.NOT_FOUND, 'Post not found');
    return postRepository.getById(id);
  };
  async getAll() {
    return postRepository.getAll();
  };
  async update(id, description, user_id, target_id, type_id) {
    await this.getById(id);
    return postRepository.update(id, description, user_id, target_id, type_id);
  };
  async delete(id) {
    await this.getById(id);
    return postRepository.deleteUp(id, false);
  };
};

module.exports = new postService();
