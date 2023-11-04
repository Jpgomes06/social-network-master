const albumitemRepository = require('../repositories/albumitemRepository');
class albumitemService {
  async create(post_id, album_id) {
    const albumItem = await albumitemRepository.create(post_id, album_id);
    return albumItem;
  };
  async getAll() {
    return albumitemRepository.getAll();
  };  
  async delete(id) {
    return albumitemRepository.delete(id);
  };
};

module.exports = new albumitemService();
