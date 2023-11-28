const httpStatus = require('../utils/statusCodes');
const commentsService = require('../services/commentsService');

class commentsController {
  async create(req, res) {
    const { description, user_id, post_id } = req.body;
    const comments = await commentsService.create(description, user_id, post_id);
    return res.status(httpStatus.CREATED).json({ 
      details: "Comments created successfully",
      data: comments
    });    
  };
  async getByid(req, res) {
    const { id } = req.params;    
    const comments = await commentsService.getByid(id);      
    return res.status(httpStatus.OK).json(comments);
  };
  async getAll(req, res) {    
    const comments = await commentsService.getAll();      
    return res.status(httpStatus.OK).json(comments);
  };
  async update(req, res) {
    const { id } = req.params;  
    const { description, user_id, post_id } = req.body; 
    await commentsService.update(id, description, user_id, post_id);
    return res.status(httpStatus.OK).json({
      details: "Comments updated successfully"
    });  
  };
  async delete(req, res) {
    const { id } = req.params;
    await commentsService.delete(id);    
    return res.status(httpStatus.OK).json({
      details: "Comments deleted successfully"
    });
  };
};

module.exports = new commentsController();
