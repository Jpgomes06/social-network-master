'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('post', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      description:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "user",
            key: 'id'
        }
      },    
      target_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: "target_public",
            key: 'id'
        }             
      },
      type_id: {
        type: Sequelize.INTEGER,
        references:{
            model: "file_type",
            key: 'id'
        }
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('post');
  }
};