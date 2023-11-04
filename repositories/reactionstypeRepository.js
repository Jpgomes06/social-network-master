const Reactions_type = require('../models/reactions_type');
const httpStatus = require('../utils/statusCodes');
const Sequelize = require('../models/db');

class reactionstypeRepository {
  async create(description) {
    const t = await Sequelize.transaction();
    const reactionstype = await Reactions_type.create(
          {
          description
          },
          { transaction: t }
        );
    await t.commit();
    return reactionstype;
  };
  async getAll(){
    const reactionsType = await Reactions_type.findAll();
    return reactionsType;
  };   
  async delete (id) {       
    const reactionsType = await Reactions_type.findOne({ where: { id } });
    if (!reactionsType) throw new Error('Reactions Type not found');        
    await reactionsType.destroy();
    return true; 
  };    
};

module.exports = new reactionstypeRepository();
