'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reactions_type extends Model {
    static associate(models) {
      reactions_type.hasMany(models.reactions, { foreignKey: 'reactions_type_id'});
    };
  };
  reactions_type.init({
    id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'reactions_type',
  });
  return reactions_type;
};