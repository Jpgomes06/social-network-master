const commentsRepository = require('../repositories/commentsRepository')

class commentsService {
  async create(description, user_id, post_id) {
    const post = await commentsRepository.create(description, user_id, post_id);
    return post;
  };
  async getByid(id) {
    return commentsRepository.getByid(id);
  };
  async getAll() {
    return commentsRepository.getAll();
  };
  async update(id, description, user_id, post_id) {
    return commentsRepository.update(id, description, user_id, post_id);
  };
  async delete(id) {
    return commentsRepository.delete(id);
  };
};

module.exports = new commentsService();
