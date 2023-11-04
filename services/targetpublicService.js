const targetpublicRepository = require('../repositories/targetpublicRepository');

class targetpublicService {
  async create(type) {
    const target = await targetpublicRepository.create(type);
    return target;
  };
  async getAll() {
    return targetpublicRepository.getAll();
  };  
  async delete(id) {
    return targetpublicRepository.delete(id);
  };
};

module.exports = new targetpublicService();
