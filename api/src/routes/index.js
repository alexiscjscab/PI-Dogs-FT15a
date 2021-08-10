const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const dogs = require('./dogs');
const temperament = require('./temperament');
const idRaza = require('./idRaza');
const dog = require('./dog');
const tempFilter = require('./tempFilter');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', dogs);
router.use('/temperament',temperament);
router.use('/idRaza',idRaza);
router.use('/dog', dog);
router.use('/temp', tempFilter);



module.exports = router;
