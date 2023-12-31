const Sequelize = require("sequelize");
const db = require('./db');

const Target_public = db.define("target_public", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },    
    is_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
   }
}, {
    tableName: 'target_public',
    hooks: {
        afterCreate: (record) => {            
            delete record.dataValues.is_active;
        }
    }
});

// Target_public.sync(); //a função sync() cria a tabela no banco de dados caso nao esteja criada

module.exports = Target_public;
