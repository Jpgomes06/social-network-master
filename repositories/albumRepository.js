const Album = require('../models/album');
const httpStatus = require('../utils/statusCodes');
const Sequelize = require('../models/db');

class albumRepository {
  async create(description, target_id) {
    const t = await Sequelize.transaction();
    const existingAlbum = await Album.findOne({ where : { description: description, target_id: target_id }});
    if (existingAlbum) throw new Error('Album already exists');
    const album = await Album.create(
        {
        description, 
        target_id
        },
        { transaction: t }
        );
    await t.commit();
    return album;
  };
  async getById(id){
    const user = await Album.findOne({ where: { id } });
    if (!user) throw new Error('Album not found');
    return user;
  };
  async getAll(){
    const album = await Album.findAll();
    return album
  };
  async update(id, description, target_id) {           
    const t = await Sequelize.transaction();               
    const album = await Album.findOne({ where: { id } });
    if (!album) throw new Error('Album not found');
    album.set({
        "description": description,
        "target_id": target_id
    });
    await album.save({ transaction: t });    
    await t.commit()            
  };
  async delete (id) {         
    const user = await Album.findOne({ where: { id } });
    if (!user) throw new Error('Album not found');        
    await user.destroy();
    return true; 
  };    
};
module.exports = new albumRepository();
