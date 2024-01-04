'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comments', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      description: {
          type: Sequelize.STRING
      },    
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,        
        references:{
            model: "user",
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('comments');
  }
};