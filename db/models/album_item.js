'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AlbumItem extends Model {
       static associate(models) {
        AlbumItem.belongsTo(models.Post, { foreignKey: 'post_id'});
        AlbumItem.belongsTo(models.Album, { foreignKey: 'album_id'});      
    };
  };
  AlbumItem.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    post_id: DataTypes.INTEGER,
    album_id: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'AlbumItem',
  });
  return AlbumItem;
};