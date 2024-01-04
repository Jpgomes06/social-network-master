'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class album_item extends Model {
       static associate(models) {
        album_item.belongsTo(models.Post, { foreignKey: 'post_id'});
        album_item.belongsTo(models.Album, { foreignKey: 'album_id'});      
    };
  };
  album_item.init({
    id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER,
    album_id: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'album_item',
  });
  return album_item;
};