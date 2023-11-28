const httpStatus = require('../utils/statusCodes');
const albumitemService = require('../services/albumitemService');
class albumitemController {
  async create(req, res) {
    const { post_id, album_id } = req.body;
    const albumItem = await albumitemService.create(post_id, album_id);
    return res.status(httpStatus.CREATED).json({      
      data: albumItem
    });    
  };
  async getAll(req, res) {    
      const albumItem = await albumitemService.getAll();      
      return res.status(httpStatus.OK).json(albumItem);
  } ;  
  async delete(req, res) {
    const { id } = req.params;
    await albumitemService.delete(id);    
    return res.status(httpStatus.OK).json({
      details: "albumItem deleted successfully"
    });
  };
};

module.exports = new albumitemController();
