'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class token extends Model {
    static associate(models) {
      token.belongsTo(models.User, { foreignKey: 'user_id'});
    };
  };
  token.init({
    id: DataTypes.INTEGER,
    token: DataTypes.STRING,
    user_id: DataTypes.INTEGER 
  }, {
    sequelize,
    modelName: 'token',
  });
  return token;
};