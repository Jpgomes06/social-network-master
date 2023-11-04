const httpStatus = require('../utils/statusCodes');
const filetypeService = require('../services/filetypeService');

class filetypeController {
  async create(req, res) {
    const { type } = req.body;
    const fileType = await filetypeService.create(type);
    return res.status(httpStatus.CREATED).json({      
      data: fileType
    });    
  };
  async getAll(req, res) {    
    const fileTypes = await filetypeService.getAll();      
    return res.status(httpStatus.OK).json(fileTypes);
  }   
  async delete(req, res) {
    const { id } = req.params;
    await filetypeService.delete(id);    
    return res.status(httpStatus.OK).json({
      details: "FileType deleted successfully"
    });
  };
};

module.exports = new filetypeController();
