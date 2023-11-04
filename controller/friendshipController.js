const httpStatus = require('../utils/statusCodes');
const friendshipService = require('../services/friendshipService');

class friendshipController {
  async create(req, res) {
    const { principal_user_id, friend_id} = req.body;
    const friend = await friendshipService.create(principal_user_id, friend_id);
    return res.status(httpStatus.CREATED).json({      
      data: friend
    });    
  }
  async getAll(req, res) {    
    const friends = await friendshipService.getAll();      
    return res.status(httpStatus.OK).json(friends);
  }   
  async delete(req, res) {
    const { id } = req.params;
    await friendshipService.delete(id);    
    return res.status(httpStatus.OK).json({
      details: "Friendship deleted successfully"
    });
  }
};

module.exports = new friendshipController();
