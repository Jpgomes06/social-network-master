const Reactions = require('../models/Reactions');
const httpStatus = require('../utils/statusCodes');
const Sequelize = require('../models/db');

class reactionsRepository {
  async create(user_id, reactions_type_id, post_id) {
    const t = await Sequelize.transaction();
    const existingReactions = await Reactions.findOne(
        { where : 
            { 
                user_id: user_id, 
                reactions_type_id: reactions_type_id,
                post_id: post_id 
            }
        }
     );
    if(existingReactions) throw new Error('Reactions already exists');
    const reactions = await Reactions.create(
        {
            user_id, 
            reactions_type_id,
            post_id
        },
        { transaction: t }
    );
    await t.commit();
    return reactions;
  };

  async getById(id){
    const reactions = await Reactions.findOne({ where: { id } });
    if(!reactions) throw new Error('Reactions not found');
    return reactions;
  };
  async getAll(){
    const reactions = await Reactions.findAll();
    return reactions;
  };
  async update(id, user_id, reactions_type_id, post_id) {           
    const t = await Sequelize.transaction();               
    const reactions = await Reactions.findOne({ where: { id } });
    if(!reactions) throw new Error('Reactions not found');
    reactions.set({
        "user_id": user_id, 
        "reactions_type_id": reactions_type_id,
        "post_id": post_id
    });
    await reactions.save({ transaction: t });    
    await t.commit()            
  };
  async delete (id) {
    const reactions = await Reactions.findOne({ where: { id } });
    if(!reactions) throw new Error('Reactions not found');        
    await reactions.destroy();
    return true;        
  };    
};

module.exports = new reactionsRepository();
