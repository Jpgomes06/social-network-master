const Reactions_type = require('../models/reactions_type');
const httpStatus = require('../utils/statusCodes');
const Sequelize = require('../models/db');
const ApiError = require('../utils/ApiError');

class reactionstypeRepository {
  async create(description) {
    try {
      return Sequelize.transaction(async(t) => {
        return Reactions_type.create(
          {
            description
          },{ transaction: t }
        );
      });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while ');      
    };
  };
  async getAll(){
    const reactionsType = await Reactions_type.findAll();
    return reactionsType;
  }; 
  async getById(id){
    return Reactions_type.findOne({ where: { id } });   
  };   
  async delete (id) {   
    try {
      return Sequelize.transaction(async(t) => {
        Reactions_type.update({
          is_active: false},
          {where : { id: id }},          
          );
      });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while deleting Reactions Type');      
    };
  };    
};

module.exports = new reactionstypeRepository();
