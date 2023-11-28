const filetypeRepository = require('../repositories/filetypeRepository');
const httpStatus = require('../utils/statusCodes');
const ApiError = require('../utils/ApiError');

class filetypeService {
  async create(type) {    
    const fileType = await filetypeRepository.create(type);
    return fileType;
  };
  async getAll() {
    return filetypeRepository.getAll();
  };  
  async getById(id) {
    const findId = await filetypeRepository.getById(id);   
    if (!findId) throw new ApiError(httpStatus.NOT_FOUND,'file type not found');
    return findId;
  };
  async delete(id) {
    await this.getById(id);
    return filetypeRepository.deleteUp(id, false);
  };
};

module.exports = new filetypeService();
