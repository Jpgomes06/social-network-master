const Comments = require('../models/comments');
const Sequelize = require('../models/db');
const ApiError = require('../utils/ApiError');
const httpStatus = require('../utils/statusCodes')

class commentsRepository {
  async create(description, user_id, post_id) {
    try {
      return Sequelize.transaction(async(t) => {
        return Comments.create(
          {
              description, 
              user_id, 
              post_id
          }, { transaction: t });
      });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while creating comments ');      
    };
  };
  async getByid(id){
    return Comments.findOne({ where: { id } });
   
  };
  async getAll(){
    return Comments.findAll();   
  };
  async update(id, description, user_id, post_id) {  
    try {
      return Sequelize.transaction(async(t) => {
        Comments.update({
          description, 
          user_id,
          post_id
        }, { where: { id: id } });
      });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while ');      
    };        
  };
  async deleteUp(id, is_active) { 
    try {
      return Sequelize.transaction(async(t) => {
        Comments.update({
          is_active
        }, { where: { id: id } });
      });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while deleting post');      
    };            
  };   
};
module.exports = new commentsRepository();
