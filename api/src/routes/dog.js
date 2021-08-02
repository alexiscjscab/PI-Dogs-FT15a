const Router = require('express');
const {Dog, Temperament} = require('../db');
const router = Router();
const { v4: uuidv4 } = require('uuid');

router.post('/', async (req, res) => {

    const {name, life_span, weight, height, image, temperaments} = req.body;
    let idTemp;

    const createDog = await Dog.create({
        name: name,
        life_span: life_span,
        weight: weight,
        height: height,
        image: image,
        id: uuidv4()
    });

    for(let i = 0; i < temperaments.length; i++ ){
        try{
            idTemp = await Temperament.findAll({
                where: {
                    temperament: temperaments[i]
                },
                attributes: ['id']
            })
            console.log('hola')
            createDog.addTemperament(idTemp);
        }catch(error){
            res.status(400).json({error: "error"})
        }
    }
    res.json(createDog);
});

module.exports = router;
