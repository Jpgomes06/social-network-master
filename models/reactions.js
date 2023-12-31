const Sequelize = require("sequelize");
const db = require('./db');
const { DataTypes } = require('sequelize')

const Users = require('../models/users');
const Post = require('../models/post.js');
const Reactions_type = require('../models/reactions_type.js');

const Reactions = db.define("reactions", {
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
            model: Users,
            key: 'id'
        }
    },    
    reactions_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references:{
            model: Reactions_type,
            key: 'id'
        }     
    },
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
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
    tableName: 'reactions',
    hooks: {
        afterCreate: (record) => {            
            delete record.dataValues.is_active;
            delete record.dataValues.created_at;
            delete record.dataValues.updated_at;
        }
    }
});   

// Reactions.sync(); //a função sync() cria a tabela no banco de dados caso nao esteja criada

module.exports = Reactions;
