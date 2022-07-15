const { Sequelize, DataTypes } = require('sequelize');
const {
      DB_USER, DB_PASSWORD, DB_HOST,
    } = process.env;
    
    const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/santex`)

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

const Trainer = sequelize.define('Trainer', {
    Id:  {
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
    },
    Edad:{
        type: DataTypes.STRING,
    }
});


module.exports = {
    sequelize,
    Profesor
}