'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reactions extends Model {    
    static associate(models) {
      reactions.belongsTo(models.Post, { foreignKey: 'post_id'});
      reactions.belongsTo(models.reactions_type, { foreignKey: 'reactions_type_id'});
      reactions.belongsTo(models.User, { foreignKey: 'user_id'});
    };
  };
  reactions.init({
    id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    reactions_type_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'reactions',
  });
  return reactions;
};