const Repository = require('../repositories/postRepository')

class postService {
  async create(description, user_id, target_id, type_id) {
    const post = await Repository.createPost(description, user_id, target_id, type_id);
    return post;
  };
  async getById(id) {
    return Repository.getById(id);
  };
  async getAll() {
    return Repository.getAll();
  };
  async update(id, description, user_id,target_id, type_id) {
    return Repository.update(id, description, user_id, target_id, type_id);
  };
  async delete(id) {
    return Repository.delete(id);
  };
};

module.exports = new postService();
