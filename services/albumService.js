const Repository = require('../repositories/albumRepository')

class AlbumService {
  async create(description, target_id) {
    const album = await Repository.create(description, target_id);
    return album;
  };
  async getById(id) {
    return Repository.getById(id);
  };
  async getAll() {
    return Repository.getAll();
  };
  async update(id, description, target_id) {
    return Repository.update(id, description, target_id);
  };
  async delete(id) {
    return Repository.delete(id);
  };
};

module.exports = new AlbumService();
