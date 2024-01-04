'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReactionsType extends Model {
    static associate(models) {
      ReactionsType.belongsTo(models.Reactions, { foreignKey: 'reactions_type_id'});
    };
  };
  ReactionsType.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ReactionsType',
  });
  return ReactionsType;
};