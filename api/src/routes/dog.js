const Router = require('express');
const {Dog, Temperament} = require('../db');
const router = Router();
const { v4: uuidv4 } = require('uuid');

router.post('/', async (req, res) => {

    const {name, life_span, weight, height, image, temperaments} = req.body;
    
  
    
    let idTemp; 
    
    const createDog = await Dog.create({
        name,
        life_span,
        weight ,
        height,
        image,
        id: uuidv4()        
    });

    for(let i = 0; i < temperaments.length; i++){
    
    		console.log(temperaments[i])
          idTemp = await Temperament.findAll({
                where: {
                    temperament: temperaments[i]
                },
                attributes: ['id']
            })
            createDog.addTemperament(idTemp);

    }
    res.json(createDog)
});

module.exports = router;
