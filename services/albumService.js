const albumRepository = require('../repositories/albumRepository');
const httpStatus = require('../utils/statusCodes');
const ApiError = require('../utils/ApiError');

class AlbumService {
  async create(description, target_id) {
    const Album = await albumRepository.getById(description, target_id);
    if (Album) throw new ApiError(httpStatus.CONFLICT,'Album already exists');
    return albumRepository.create(description, target_id);
  };
  async getById(id) {
    const findId = await albumRepository.getById(id);
    if (!findId) throw new ApiError(httpStatus.NOT_FOUND, 'Album not found');
    return findId
  };
  async getAll() {
    return albumRepository.getAll();
  };
  async update(id, description, target_id) {
    await this.getById(id);
    return albumRepository.update(id, description, target_id);
  };
  async delete(id) {
    await this.getById(id);
    return albumRepository.deleteUp(id, false);
  };
};

module.exports = new AlbumService();
