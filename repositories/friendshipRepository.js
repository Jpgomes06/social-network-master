const Friendship = require('../models/Friendship');
const httpStatus = require('../utils/statusCodes');
const Sequelize = require('../models/db');

class friendshipRepository {
  async create(principal_user_id, friend_id) {
    const t = await Sequelize.transaction();
    const existingfriendship = await Friendship.findOne({ where : {principal_user_id: principal_user_id, friend_id: friend_id}});
    if (existingfriendship) throw new Error('friendship already exists');      
    const friend = await Friendship.create(
        {
          principal_user_id,
          friend_id           
        },
          { transaction: t }
      );
    await t.commit();
    return friend;
  };
  async getAll(){
    const friends = await Friendship.findAll();
    return friends
  };   
  async delete (id) {       
    const friend = await Friendship.findByPk(id);
    if (!friend) throw new Error('friendship not found');        
    await friend.destroy();
    return true;  
  };    
};
module.exports = new friendshipRepository();
