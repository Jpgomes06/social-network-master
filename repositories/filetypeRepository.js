const File_type = require('../models/file_type');
const Sequelize = require('../models/db');
const httpStatus = require('../utils/statusCodes');
const ApiError = require('../utils/ApiError');

class filetypeRepository {
  async create(type) {
    try {
      return Sequelize.transaction(async(t) => {
        return File_type.create({type}, { transaction: t });
      });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while creating file type');      
    };
  };
  async getAll(){
    return File_type.findAll();    
  }; 
  async getById(id){
    return File_type.findOne({ where: { id } });   
  };  
  async deleteUp(id, is_active) { 
    try {
      return Sequelize.transaction(async(t) => {
        File_type.update({
          is_active
        }, {where: { id: id }});
      });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while deleting post');      
    };            
  };    
};

module.exports = new filetypeRepository();
