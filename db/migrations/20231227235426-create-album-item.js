'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('album_item', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },    
      post_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "post",
            key: 'id'
        }       
      },
      album_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: "album",
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
    await queryInterface.dropTable('album_item');
  }
};