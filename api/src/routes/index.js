const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogs = require('./dogs');
const temperament = require('./temperament');
const idRaza = require('./idRaza');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogs);
router.use('/temperament',temperament);
router.use('/idRaza',idRaza);



module.exports = router;
