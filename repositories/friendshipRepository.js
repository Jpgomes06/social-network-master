const Friendship = require('../models/Friendship');
const httpStatus = require('../utils/statusCodes');
const Sequelize = require('../models/db');
const ApiError = require('../utils/ApiError');

class friendshipRepository {
  async create(principal_user_id, friend_id) {
    try {
      return Sequelize.transaction(async (t) => {
        return Friendship.create(
          {
            principal_user_id,
            friend_id           
          },{ transaction: t }
        )});
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while creating friendship');
    };
  };
  async getAll(){
    return Friendship.findAll();
  };   
  async getById(id){
    return Friendship.findOne({ where : {id: id}});
  };
  async deleteUp(id, is_active) { 
    try {
      return Sequelize.transaction(async(t) => {
        Friendship.update({
          is_active
        }, {where: { id: id }});
      });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while deleting friendship');      
    };            
  };    
};
module.exports = new friendshipRepository();
