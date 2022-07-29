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

const Student = sequelize.define('Student',{
    Id:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    CompleteName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Adress: {
        type: DataTypes.STRING,
        allowNull: false
    },
    OverallRating: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    Active:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }

});

module.exports = {
    sequelize,
    Profesor,
    Student
}