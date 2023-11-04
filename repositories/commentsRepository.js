const Comments = require('../models/comments');
const Sequelize = require('../models/db');

class commentsRepository {
  async create(description, user_id, post_id) {
    const t = await Sequelize.transaction();
    const existingComments = await Comments.findOne(
        { where : 
            { 
                description: description, 
                user_id: user_id,
                post_id: post_id
            }
        });
    if (existingComments) throw new Error('Comments already exists');
    const comments = await Comments.create(
    {
        description, 
        user_id, 
        post_id
    },
    { transaction: t }
    );
    await t.commit();
    return comments;
  };
  async getByid(id){
    const comments = await Comments.findOne({ where: { id } });
    if (!comments) throw new Error('Comments not found');
    return comments;
  };
  async getAll(){
    const comments = await Comments.findAll();
    return comments
  };
  async update(id, description, user_id, post_id) {           
    const t = await Sequelize.transaction();               
    const comments = await Comments.findOne({ where: { id } });
    if (!comments) throw new Error('Comments not found');
    comments.set({
        "description": description, 
        "user_id": user_id,
        "post_id": post_id
    });
    await comments.save({ transaction: t });    
    await t.commit()            
  };
  async delete (id) {
    const comments = await Comments.findOne({ where: { id } });
    if (!comments) throw new Error('Comments not found');        
    await comments.destroy();
    return true;        
  };    
};
module.exports = new commentsRepository();
