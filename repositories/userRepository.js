const User = require('../models/users');
const Token = require('../models/token');
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
    return User.findOne({
      where: { id: id },
      attributes: ['id', 'full_name', 'email']
  });   
  };
  async tokenPr(token){
    return Token.findOne({
      where: { token: token }
  });   
  };
  async getAll(){
    return await User.findAll({
      attributes: ['id', 'full_name', 'email']
    });    
  };
  async update(user, full_name, email) {    
    try {
      return Sequelize.transaction(async(t) => {
        return User.update({
          full_name: full_name, email: email },
          {where : { id: id }},
          { transaction: t }        
       )});       
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while updating user');      
    };         
  };
  async delete (id) {
    try {
      return Sequelize.transaction(async(t) => {
        User.update({
          is_active: false},
          {where : { id: id }},          
          );
      });
    } catch (error) {
      throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,'Error while deleting user');    
    };           
  };    
};
module.exports = new UserRepository();
