'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      full_name: {
        type: Sequelize.STRING,
        allowNull: false
      },    
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true      
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      is_active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user');
  }
};