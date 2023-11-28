const friendshipRepository = require('../repositories/friendshipRepository');
const httpStatus = require('../utils/statusCodes');
const ApiError = require('../utils/ApiError');

class friendshipService {
  async create(principal_user_id, friend_id) {
    const findFrienship = await friendshipRepository.getById(principal_user_id, friend_id);
    if (findFrienship) throw new ApiError(httpStatus.CONFLICT,'Friendship already exists');
    return friendshipRepository.create(principal_user_id, friend_id);
  }  
  async getAll() {
    return friendshipRepository.getAll();
  }; 
  async getById(id) {
    const findId = await friendshipRepository.getById(id); 
    if (!findId) throw new ApiError(httpStatus.NOT_FOUND,'Friendship not found');
    return findId;
  };
  async delete(id) {
    await this.getById(id);
    return friendshipRepository.deleteUp(id, false);
  };
};

module.exports = new friendshipService();
