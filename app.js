// Imports
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const { connectDB } = require('./db.js');
require('ejs');

const app = express();
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
// TODO: Implementar middlewares

//Conecto con la base de datos.
connectDB();

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));