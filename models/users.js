const { Sequelize } = require('sequelize');
const db = require('./db');

const Users = db.define("user", {
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
        allowNull: false 
    },
    is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
   }
}, {
    tableName: 'user',
    hooks: {
        afterCreate: (record) => {
            delete record.dataValues.password;
            delete record.dataValues.is_active;
        }
    }
});

//Users.sync(); //a função sync() cria a tabela no banco de dados caso nao esteja criada
module.exports = Users;


// Desabilita as colunas createdAt e updatedAt