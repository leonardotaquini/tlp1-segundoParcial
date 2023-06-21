// TODO: Crear modelo de datos de Reserva
const { sequelize, DataTypes } = require('../db.js'); 

const Reserva = sequelize.define('Reserva', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codigo_reserva: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fecha_reserva: {
        type: DataTypes.DATE,
        allowNull: false
    }
},
{
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'reservas'
})

