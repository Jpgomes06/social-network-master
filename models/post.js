const Sequelize = require("sequelize");
const db = require('./db');
const { DataTypes } = require('sequelize')

const File_type = require("../models/file_type");
const Target_public = require("../models/target_public");
const Users = require("../models/users");

const Post = db.define("post", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: 'id'
        }
    },    
    target_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
            model: Target_public,
            key: 'id'
        }             
    },
    type_id: {
        type: Sequelize.INTEGER,
        references:{
            model: File_type,
            key: 'id'
        }
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: true
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
    tableName: 'post',
    hooks: {
        afterCreate: (record) => {
            delete record.dataValues.is_active;
            delete record.dataValues.created_at;
            delete record.dataValues.updated_at;
        }
    }
});

// Post.sync(); //a função sync() cria a tabela no banco de dados caso nao esteja criada

module.exports = Post;
