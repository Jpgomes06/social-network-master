'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reactions', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: "user",
            key: 'id'
        }
      },    
      reactions_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references:{
            model: "reactions_type",
            key: 'id'
        }     
      },
      post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: "post",
            key: 'id'
        }
      },
      is_active: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('reactions');
  }
};