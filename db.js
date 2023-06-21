//Se importan clases de la libreria
const { Sequelize, Model, Datatypes } = require('sequelize');
require('dotenv').config();

//Se crea una instancia de la conexion a la base de datos

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
);

const connectDB = async() => {
    try {
        await sequelize.sync({force: true});
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.log('Error al conectar a la base de datos');
    }
}

module.exports = {
    sequelize,
    Model,
    Datatypes,
    connectDB
}