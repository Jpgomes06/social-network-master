'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FileType extends Model {
    static associate(models) {
    }
  }
  FileType.init({
    id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'FileType',
  });
  return FileType;
};