const httpStatus = require('../utils/statusCodes');
const postService = require('../services/postService');

class postController {
  async create(req, res) {
    const { description, user_id, target_id, type_id } = req.body;
    const post = await postService.create(description, user_id, target_id, type_id);
    return res.status(httpStatus.CREATED).json({   
      details: "Post created successfully",         
      data: post 
    });    
  };
  async getByid(req, res) {
    const { id } = req.params;    
    const post = await postService.getById(id);      
    return res.status(httpStatus.OK).json(post);
  };
  async getAll(req, res) {    
    const posts = await postService.getAll();      
    return res.status(httpStatus.OK).json(posts);
  };
  async update(req, res) {
    const { id } = req.params;  
    const { description, user_id, target_id, type_id } = req.body; 
    await postService.update(id, description, user_id, target_id, type_id);
    return res.status(httpStatus.OK).json({
      details: "Post updated successfully"
    });  
  };
  async delete(req, res) {
    const { id } = req.params;
    await postService.delete(id);    
    return res.status(httpStatus.OK).json({
      details: "Post deleted successfully"
    });
  };
};

module.exports = new postController();
