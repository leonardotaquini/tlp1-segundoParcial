// TODO: Importar el modelo y controladores de reservas, luego vincular rutas con controladores
const {
    getReservas,
    postReserva,
    putReserva,
    deleteReserva
    } = require('../controllers/reserva.controllers.js');
const router = require('express').Router();


// ==========================================
//         Rutas para renderizar vistas
// ==========================================

// Obtener todas las reservas
router.get('/', (req, res) => {
    res.render('index');
});

// Formulario para crear una reserva
router.get('/reserva/crear', (req, res) => {
    res.render('crear');
})
// Formulario para actualizar una reserva

// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
router.get('/api/reservas/',getReservas );
 
// Crear una reserva
router.post('/api/reservas', postReserva);
 
// Actualizar una reserva
router.put('/api/reservas/:id', putReserva);
 
// Eliminar una reserva de forma lógica
router.delete('/api/reservas/:id', deleteReserva);

 
 module.exports = router;