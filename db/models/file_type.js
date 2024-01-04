'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FileType extends Model {
    static associate(models) {
    }
  }
  FileType.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'FileType',
  });
  return FileType;
};