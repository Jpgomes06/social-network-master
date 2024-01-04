'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Friendship extends Model {
    static associate(models) {
      Friendship.belongsTo(models.User, { foreignKey: 'principal_user_id'});
      Friendship.belongsTo(models.User, { foreignKey: 'friend_id'});
    }
  }
  Friendship.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      principal_user_id: DataTypes.INTEGER,
      friend_id: DataTypes.INTEGER,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      is_active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Friendship',
    }
  );
  return Friendship;
};
