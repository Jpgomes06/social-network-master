const friendshipRepository = require('../repositories/friendshipRepository');

class friendshipService {
  async create(principal_user_id, friend_id) {
    const user = await friendshipRepository.create(principal_user_id, friend_id);
    return user;
  };
  async getAll() {
    return friendshipRepository.getAll();
  };  
  async delete(id) {
    return friendshipRepository.delete(id);
  };
};

module.exports = new friendshipService();
