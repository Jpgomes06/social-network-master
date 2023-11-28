const Album = require('../models/album');
const httpStatus = require('../utils/statusCodes');
const Sequelize = require('../models/db');
const ApiError = require('../utils/ApiError');

class albumRepository {
  async create(description, target_id) {
    try {
      return Sequelize.transaction(async(t) => {
        return Album.create(
          {
          description, 
          target_id
          }, { transaction: t });
        });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while creating album');      
    };    
  };
  async getById(id){
    return Album.findOne({ where: { id } });
  };
  async getAll(){
    return Album.findAll();    
  };
  async update(id, description, target_id) {  
    try {
      return Sequelize.transaction(async(t) => {
        Album.update({
          description,
          target_id}, 
          { where: { id : id } }
        );
      });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while updating album');      
    };           
  };
  async deleteUp(id, is_active) { 
    try {
      return Sequelize.transaction(async(t) => {
        Album.update({
          is_active
        }, { where: { id : id} });
      });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while deleting post');      
    };            
  };    
};
module.exports = new albumRepository();
