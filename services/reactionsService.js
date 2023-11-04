const reactionsRepository = require('../repositories/reactionsRepository')

class reactionsService {
  async create(user_id, reactions_type_id, post_id) {
    const reactions = await reactionsRepository.create(user_id, reactions_type_id, post_id);
    return reactions;
  };
  async getById(id) {
    return reactionsRepository.getById(id);
  };
  async getAll() {
    return reactionsRepository.getAll();
  };
  async update(id, user_id, reactions_type_id, post_id) {
    return reactionsRepository.update(id, user_id, reactions_type_id, post_id);
  };
  async delete(id) {
    return reactionsRepository.delete(id);
  };
};

module.exports = new reactionsService();
