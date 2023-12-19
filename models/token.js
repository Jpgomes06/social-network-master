const db = require('./db');
const Users = require("../models/users");
const Sequelize = require("sequelize");


const Token = db.define("token",  {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    value: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        references: {
            model: Users,
            key: 'id'
        }
    }

    }, { tableName: 'token'}
);

module.exports = Token;
