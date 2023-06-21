const Tarea = require('../models/Reserva.js');
const ctrlReservas = {
    getReservas: async(req, res) =>{
        try {
            const reservas = await Tarea.findAll();
            res.status(200).json(reservas);
        } catch (error) {
            res.status(error.status || 500).json({msg: error.message || 'Ha ocurrido un error en el servidor.'});
        }
    },
    postReserva: async(req, res) => {
        try {
            const reserva = await Tarea.create(req.body);
            res.status(201).json(reserva);
        } catch (error) {
            res.status(error.status || 500).json({msg: error.message || 'Ha ocurrido un error en el servidor.'});
        }
    },
    putReserva: async(req, res) => {
        const id = req.params.id;
        const reserva = req.body;
        try {
            const reservaActualizada = await Tarea.update(reserva, {
                where: {
                    id: id
                }
            });
            if(!reservaActualizada){
               return res.status(404).json({msg: 'No se pudo actualizar la reserva'});
            }
            res.status(200).json({msg: 'Se ha actualizado la reserva con id: ' + id});
        } catch (error) {
            res.status(error.status || 500).json({msg: error.message || 'Ha ocurrido un error en el servidor.'});
        }
    },
    deleteReserva: async(req, res) => {
        try {
            const id = req.params.id;
            await Tarea.destroy({
                where: {
                    id: id
                }
            });  
            res.status(200).json(`Se ha eliminado la reserva con id: ${id}`);
        } catch (error) {
            res.status(error.status || 500).json({msg: error.message || 'Ha ocurrido un error en el servidor.'});
        }
    }
};

module.exports = ctrlReservas;