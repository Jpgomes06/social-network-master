const httpStatus = require('../utils/statusCodes');
const reactionstypeService = require('../services/reactionstypeService');

class reactionstypeController {
  async create(req, res) {
    const { description } = req.body;
    const reactionsType = await reactionstypeService.create(description);
    return res.status(httpStatus.CREATED).json({      
      data: reactionsType
    });    
  };
  async getAll(req, res) {    
      const reactionsType = await reactionstypeService.getAll();      
      return res.status(httpStatus.OK).json(reactionsType);
  }; 
  async delete(req, res) {
    const { id } = req.params;
    await reactionstypeService.delete(id);    
    return res.status(httpStatus.OK).json({
      details: "Reactions Type deleted successfully"
    });
  };
};

module.exports = new reactionstypeController();
