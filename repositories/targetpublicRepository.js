const Target_public = require('../models/target_public');
const httpStatus = require('../utils/statusCodes');
const Sequelize = require('../models/db');

class targetpublicRepository {
  async create(type) {
    const t = await Sequelize.transaction();
    const target = await Target_public.create({ type }, { transaction: t });
    await t.commit();
    return target;
  };
  async getAll(){
    const targets = await Target_public.findAll();
    return targets;
  };   
  async delete (id) {       
    const target = await Target_public.findOne({ where: { id } });
    if (!target) throw new Error('Target public not found');        
    await target.destroy();
    return true;
  };    
};

module.exports = new targetpublicRepository();
