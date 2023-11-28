const db = require('./db');
const Users = require("../models/users");
const Sequelize = require("sequelize");
const { DataTypes } = require('sequelize')


const Token = db.define("token",  {
    token: {
      type: Sequelize.STRING,
      required: true,
      index: true,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Users,
            key: 'id'
        }
    }
    
  }, { tableName: 'token'}
);

// db.sync()
//   .then(() => {
//     console.log('Todas as tabelas foram sincronizadas');
//   })
//   .catch((error) => {
//     console.error('Erro ao sincronizar tabelas:', error);
//   });


module.exports = Token;

