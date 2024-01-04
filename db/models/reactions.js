'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reactions extends Model {    
    static associate(models) {
      Reactions.belongsTo(models.Post, { foreignKey: 'post_id'});
      Reactions.belongsTo(models.ReactionsType, { foreignKey: 'reactions_type_id'});
      Reactions.belongsTo(models.User, { foreignKey: 'user_id'});
    };
  };
  Reactions.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: DataTypes.INTEGER,
    reactions_type_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER,
    is_active: DataTypes.BOOLEAN,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Reactions',
  });
  return Reactions;
};