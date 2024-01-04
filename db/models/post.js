'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
        Post.belongsTo(models.User, { foreignKey: 'user_id'});
        Post.belongsTo(models.Target_public, { foreignKey: 'target_id'});
        Post.belongsTo(models.File_type, { foreignKey: 'type_id'});
        Post.hasMany(models.album_item, { foreignKey: 'post_id'});
        Post.hasMany(models.reactions, { foreignKey: 'post_id'});
        Post.hasMany(models.comments, { foreignKey: 'post_id'});
    };
  };
  Post.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: DataTypes.STRING,
    user_id: DataTypes.INTEGER,   
    target_id: DataTypes.INTEGER ,
    type_id: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Post',
  });

  return Post;
};