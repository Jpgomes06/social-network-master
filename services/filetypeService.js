const filetypeRepository = require('../repositories/filetypeRepository');

class filetypeService {
  async create(type) {
    const fileType = await filetypeRepository.create(type);
    return fileType;
  };
  async getAll() {
    return filetypeRepository.getAll();
  };  
  async delete(id) {
    return filetypeRepository.delete(id);
  };
};

module.exports = new filetypeService();
