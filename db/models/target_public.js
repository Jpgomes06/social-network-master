'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TargetPublic extends Model {  
    static associate(models) {
      TargetPublic.belongsTo(models.Album, { foreignKey: 'id'});
    };
  };
  TargetPublic.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TargetPublic',
  });
  return TargetPublic;
};