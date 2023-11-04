const User = require('../models/users');
const httpStatus = require('../utils/statusCodes');
const Sequelize = require('../models/db');
const bcrypt = require('bcrypt');
const ApiError = require('../utils/ApiError');

class UserRepository {
  async create(full_name, email, hashedPassword) {
    try {
      return Sequelize.transaction(async (t) => {
        return User.create(
        {
            full_name,
            email,
            password: hashedPassword
        }, { transaction: t });      
      });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while creating user');
    };
  }; 
  async getByEmail(email){
    return User.findOne({ where : {email: email}});     
  };
  async getById(id){
    const user = await User.findOne({ where: { id } });
    if (!user) throw new Error('User not found');
    return user;
  };
  async getAll(){
    const users = await User.findAll();
    return users
  };
  async update(id, full_name, email, password) {           
    const t = await Sequelize.transaction();               
    const user = await User.findOne({ where: { id } });
    if (!user) throw new Error('User not found');
    user.set({
        "full_name": full_name,
        "email": email,
        "password": password
    });
    await user.save({ transaction: t });    
    await t.commit()            
  };
  async delete (id) {
    const user = await User.findOne({ where: { id } });
    if (!user) throw new Error('User not found');        
    await user.destroy();
    return true;        
  };    
};
module.exports = new UserRepository();
