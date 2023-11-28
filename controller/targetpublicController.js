const httpStatus = require('../utils/statusCodes');
const targetpublicService = require('../services/targetpublicService');

class targetublicController {
  async create(req, res) {
    const { type } = req.body;
    const target = await targetpublicService.create(type);   
    return res.status(httpStatus.CREATED).json({      
      data: target
    });    
  }; 
  async getAll(req, res) {    
    const targets = await targetpublicService.getAll();      
    return res.status(httpStatus.OK).json(targets);
  };   
  async delete(req, res) {
    const { id } = req.params;
    await targetpublicService.delete(id);    
    return res.status(httpStatus.OK).json({
      details: "Target public deleted successfully"
    });
  };
};

module.exports = new targetublicController();
