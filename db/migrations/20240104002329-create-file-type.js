'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('file_type', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      type: {
          type: Sequelize.STRING,
          allowNull: false
      },    
      is_active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
    }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('file_type');
  }
};