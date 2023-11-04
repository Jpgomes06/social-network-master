const Post = require('../models/post');
const httpStatus = require('../utils/statusCodes');
const Sequelize = require('../models/db');

class Repository {
  async create(description, user_id, target_id, type_id) {
    const t = await Sequelize.transaction();
    const existingPost = await Post.findOne(
        { where : 
            { 
                description: description, 
                user_id: user_id,
                target_id: target_id,
                type_id: type_id 
            }
        }
    );
    if (existingPost) throw new Error('Post already exists');
    const post = await Post.create(
        {
            description, 
            user_id,
            target_id,
            type_id
        },
        { transaction: t }
    );
    await t.commit();
    return post;
  };
  async getById(id){
    const post = await Post.findOne({ where: { id } });
    if (!post) throw new Error('Post not found');
    return post;
  };
  async getAll(){
    const posts = await Post.findAll();
    return posts;
  };
  async update(id, description, user_id, target_id, type_id) {           
    const t = await Sequelize.transaction();               
    const post = await Post.findOne({ where: { id } });
    if (!post) throw new Error('Post not found');
    post.set({
        "description": description, 
        "user_id": user_id,
        "target_id": target_id,
        "type_id": type_id
    });
    await post.save({ transaction: t });    
    await t.commit();            
  };
  async delete (id) {
    const post = await Post.findOne({ where: { id } });
    if (!post) throw new Error('Post not found');        
    await post.destroy();
    return true;        
  };    
};
module.exports = new Repository();
