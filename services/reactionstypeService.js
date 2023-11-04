const reactionstypeRepository = require('../repositories/reactionstypeRepository');

class reactionstypeService {
  async create(description) {
    const reactionsType = await reactionstypeRepository.create(description);
    return reactionsType;
  };
  async getAll() {
    return reactionstypeRepository.getAll();
  };  
  async delete(id) {
    return reactionstypeRepository.delete(id);
  };
};

module.exports = new reactionstypeService();
