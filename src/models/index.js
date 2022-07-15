const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: process.env.DBTYPE || 'mysql',
    password: process.env.DBPASSWORD,
    username: process.env.DBUSER,
    database: process.env.DBSCHEMA,
    host: process.env.DBHOST,
    port: process.env.DBPORT
})

const Profesor = sequelize.define('Profesor', {
    Id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Surname: {
        type:DataTypes.STRING,
        allowNull:false
    }
});

module.exports = {
    sequelize,
    Profesor
}