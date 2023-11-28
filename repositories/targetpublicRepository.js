const Target_public = require('../models/target_public');
const httpStatus = require('../utils/statusCodes');
const Sequelize = require('../models/db');
const ApiError = require('../utils/ApiError');

class targetpublicRepository {
  async create(type) {
    try {
      return await Sequelize.transaction(async(t) => {
        return Target_public.create({ type });
      });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while creating Target Public');      
    }; 
  };
  async getAll(){
    return Target_public.findAll();
  };   
  async getById(id){
    return Target_public.findOne({ where: { id } });  
  };
  async delete(id) {     
    try {
      return Sequelize.transaction(async(t) => {
        Target_public.update({
          is_active: false},
          {where : { id: id }},          
          );      
      });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while deleting Target Public');       
    };
  };    
};

module.exports = new targetpublicRepository();
