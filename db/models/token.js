'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    static associate(models) {
      Token.belongsTo(models.User, { foreignKey: 'user_id'});
    };
  };
  Token.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    token: DataTypes.STRING,
    user_id: DataTypes.INTEGER 
  }, {
    sequelize,
    modelName: 'Token',
    tableName: "token"
  });
  return Token;
};