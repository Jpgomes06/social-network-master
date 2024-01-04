'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Target_public extends Model {  
    static associate(models) {
      Target_public.hasMany(models.Album, { foreignKey: 'id'});
    };
  };
  Target_public.init({
    id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Target_public',
  });
  return Target_public;
};