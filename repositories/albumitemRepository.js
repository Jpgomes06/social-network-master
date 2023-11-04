const Album_item = require('../models/album_item');
const httpStatus = require('../utils/statusCodes');
const Sequelize = require('../models/db');

class albumitemRepository {
  async create(post_id, album_id) {        
    const t = await Sequelize.transaction();
    const existingalbumItem = await Album_item.findOne(
        { where :  
        { 
            post_id,
            album_id 
        }});
    if (existingalbumItem) throw new Error('Album item already exists');
    const albumItem = await Album_item.create(
        {
            post_id, 
            album_id                
        },
        { transaction: t }
        );
    await t.commit();
    return albumItem;
  };
  async getAll(){
    const albumItem = await Album_item.findAll();
    return albumItem;
  };   
  async delete(id) {       
    const albumItem = await Album_item.findOne({ where: { id } });
    if (!albumItem) throw new Error('albumItem not found');        
    await albumItem.destroy();
    return true; 
  };    
};

module.exports = new albumitemRepository();
