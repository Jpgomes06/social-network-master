const Sequelize = require("sequelize");
const db = require('./db');
const { DataTypes } = require('sequelize')

const Users = require('../models/users');
const Post = require('../models/post.js');

const Comments = db.define("comments", {
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
            model: Users,
            key: 'id'
        }     
    },
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: Post,
            key: 'id'
        }
    },
    is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false
    }
}, {
    tableName: 'comments'
});

// Comments.sync(); //a função sync() cria a tabela no banco de dados caso nao esteja criada

module.exports = Comments;
