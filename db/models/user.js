'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {    
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    full_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user',
    hooks: {
      afterCreate: (record) => {
        delete record.dataValues.password;
        delete record.dataValues.is_active;
      }
    }
  });
  return User;
};
