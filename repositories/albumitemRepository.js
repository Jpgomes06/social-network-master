const Album_item = require('../models/album_item');
const Sequelize = require('../models/db');
const httpStatus = require('../utils/statusCodes');
const ApiError = require('../utils/ApiError');

class albumitemRepository {
  async create(post_id, album_id) {
    try {
      return Sequelize.transaction(async (t) => {
        return Album_item.create(
          {
            post_id, 
            album_id                
          }, { transaction: t });      
      });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while creating Album Item');
    }; 
  };
  async getAll(){
    return Album_item.findAll();
  };   
  async getById(id){
    return Album_item.findOne({ where : { id: id}});
  };
  async deleteUp(id, is_active) { 
    try {
      return Sequelize.transaction(async(t) => {
        Album_item.update({
          is_active
        }, { where: { id : id}});
      });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while deleting Album Item');      
    };            
  };    
};

module.exports = new albumitemRepository();
