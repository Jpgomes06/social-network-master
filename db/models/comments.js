'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    static associate(models) {
      Comments.belongsTo(models.User, { foreignKey: 'user_id'});
      Comments.belongsTo(models.Post, { foreignKey: 'post_id'});
    }
  }
  Comments.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};