const Reactions = require('../models/Reactions');
const Sequelize = require('../models/db');
const httpStatus = require('../utils/statusCodes');
const ApiError = require('../utils/ApiError');

class reactionsRepository {
  async create(user_id, reactions_type_id, post_id) {
    try {
      return Sequelize.transaction(async(t) => {
        return Reactions.create(
          {
              user_id, 
              reactions_type_id,
              post_id
          },
          { transaction: t });
      });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while ');      
    };
  };

  async getById(id){
    return Reactions.findOne({ where: { id } });    
  };
  async getAll(){
    return Reactions.findAll();    
  };
  async update(id, user_id, reactions_type_id, post_id) { 
    try {
      return Sequelize.transaction(async(t) => {
        return Reactions.update({
          user_id,
          reactions_type_id,
          post_id,
        }, {where: { id: id }},
        { transaction: t });
      });
    } catch (error) {
      console.log(error)
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while updating user');
    };           
  }; 
  async delete (id) {
    try {
      return Sequelize.transaction(async(t) => {
        Reactions.update({
          is_active: false},
          {where : { id: id }},          
          );
      });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while deleting user');    
    };       
  };  
};


module.exports = new reactionsRepository();
