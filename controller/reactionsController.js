const httpStatus = require('../utils/statusCodes');
const reactionsService = require('../services/reactionsService');

class reactionsController {
  async create(req, res) {
    const { user_id, reactions_type_id, post_id } = req.body;
    const reactions = await reactionsService.create(user_id, reactions_type_id, post_id);
    return res.status(httpStatus.CREATED).json({      
      data: reactions
    });    
  }
  async getByid(req, res) {
    const { id } = req.params;    
    const reactions = await reactionsService.getById(id);      
    return res.status(httpStatus.OK).json(reactions);
  }
  async getAll(req, res) {    
    const reactions = await reactionsService.getAll();      
    return res.status(httpStatus.OK).json(reactions);
  }
  async update(req, res) {
    const { id } = req.params;  
    const { user_id, reactions_type_id, post_id } = req.body; 
    await reactionsService.update(id, user_id, reactions_type_id, post_id);
    return res.status(httpStatus.OK).json({
      details: "Reactions updated successfully"
    });  
  }
  async delete(req, res) {
    const { id } = req.params;
    await reactionsService.delete(id);    
    return res.status(httpStatus.OK).json({
      details: "Reactions deleted successfully"
    });
  }
};

module.exports = new reactionsController();
