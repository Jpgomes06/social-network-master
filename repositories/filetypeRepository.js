const File_type = require('../models/File_type');
const httpStatus = require('../utils/statusCodes');
const Sequelize = require('../models/db');

class filetypeRepository {
  async create(type) {
    const t = await Sequelize.transaction();
    const fileType = await File_type.create(
          {
          type
          },
          { transaction: t }
        );
    await t.commit();
    return fileType;
  };
  async getAll(){
    const fileTypes = await File_type.findAll();
    return fileTypes
  };   
  async delete (id) {       
    const fileType = await File_type.findOne({ where: { id } });
    if (!fileType) throw new Error('File type not found');        
    await fileType.destroy();
    return true; 
  };    
};

module.exports = new filetypeRepository();
