'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    static associate(models) {
      Album.belongsTo(models.TargetPublic, { foreignKey: 'target_id'});
    };
  };
  Album.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      description: DataTypes.STRING,
      target_id:  DataTypes.INTEGER,       
      isActive: DataTypes.BOOLEAN,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Album',
    },
 {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};