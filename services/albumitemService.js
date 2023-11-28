const albumitemRepository = require('../repositories/albumitemRepository');
const httpStatus = require('../utils/statusCodes');
const ApiError = require('../utils/ApiError');

class albumitemService {
  async create(post_id, album_id) {
    const albumItem = await albumitemRepository.create(post_id, album_id);
    const albumItemAlreadyExists = await albumitemRepository.getById(post_id, album_id);
    if(albumItemAlreadyExists) throw new ApiError(httpStatus.CONFLICT,'Album item already exists');
    return albumItem;
  };
  async getAll() {
    return albumitemRepository.getAll();
  };  
  async getById(id) {
    const findId = await albumitemRepository.getById(id);   
    if (!findId) throw new ApiError(httpStatus.NOT_FOUND,'Album item not found');
    return findId;
  };
  async delete(id) {
    await this.getById(id);
    return albumitemRepository.deleteUp(id, false);
  };
};

module.exports = new albumitemService();
