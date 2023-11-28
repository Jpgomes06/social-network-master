const Post = require('../models/post');
const httpStatus = require('../utils/statusCodes');
const Sequelize = require('../models/db');
const ApiError = require('../utils/ApiError');

class postRepository {
  async create(description, user_id, target_id, type_id) {
    try {
      return Sequelize.transaction(async(t) => {
        return Post.create(
        {
          description, 
          user_id,
          target_id,
          type_id
        }, { transaction: t });
      });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while creating post');      
    };
  };
  async getById(id){
    return Post.findOne({ where: { id } });
  };
  async getAll(){
    return Post.findAll();
  };
  async update(id, description, user_id, target_id, type_id) { 
    try {
      return Sequelize.transaction(async(t) => {
        Post.update({
          description, 
          user_id,
          target_id,
          type_id
        }, {where: { id: id }});
      });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while ');      
    };            
  };
  async deleteUp(id, is_active) { 
    try {
      return Sequelize.transaction(async(t) => {
        Post.update({
          is_active
        }, {where: { id: id }});
      });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while deleting post');      
    };            
  }; 
};
module.exports = new postRepository();
