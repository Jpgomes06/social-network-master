const httpStatus = require('../utils/statusCodes');
const AlbumService = require('../services/albumService');

class albumController {
  async create(req, res) {
    const { description, target_id } = req.body;
    const album = await AlbumService.create(description, target_id);
    return res.status(httpStatus.CREATED).json({  
      details: "Album created successfully",
      data: album
    });    
  };
  async getById(req, res) {
    const { id } = req.params;    
    const album = await AlbumService.getById(id);      
    return res.status(httpStatus.OK).json(album);
  }; 
  async getAll(req, res) {    
    const album = await AlbumService.getAll();      
    return res.status(httpStatus.OK).json(album);
  }; 
  async update(req, res) {
    const { id } = req.params;  
    const {  description, target_id } = req.body; 
    await AlbumService.update(id, description, target_id);
    return res.status(httpStatus.OK).json({
        details: "Album updated successfully"
    });  
  };   
  async delete(req, res) {
    const { id } = req.params;
    await AlbumService.delete(id);    
    return res.status(httpStatus.OK).json({
      details: "Album deleted successfully"
    });
  };
}; 

module.exports = new albumController();
