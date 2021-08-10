const {Router} = require('express');
const router = Router();
const {Temperament} = require('../db'); // de la base de datos

router.get('/', async (req, res) => {
    const results = await Temperament.findAll(); 
    // console.log(results.length) hay 124
    res.json(results);
})

module.exports = router;