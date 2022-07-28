const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: process.env.DBTYPE || 'mysql',
    password: process.env.DBPASSWORD,
    username: process.env.DBUSER,
    database: process.env.DBSCHEMA,
    host: process.env.DBHOST,
    port: process.env.DBPORT
})

const Movies = sequelize.define('Movies', {
    Id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    Title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Year: {
        type:DataTypes.INTEGER,
        allowNull:false
    },
    Rating: {
        type:DataTypes.DECIMAL,
        allowNull:false
    }
});

module.exports = {
    sequelize,
    Movies
}