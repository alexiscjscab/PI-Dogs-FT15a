const Router = require('express');
const {Dog} = require('../db');
const router = Router();
const { v4: uuidv4 } = require('uuid');

router.post('/', async (req, res) => {

    const {name, life_span, weight, height, image, temperaments} = req.body;
    const id = uuidv4()

    try{
        const [dogCreate] = await Dog.findOrCreate({
            where:{
                name: name,
                height: height,
                weight: weight,
                life_span: life_span,
                image: image,
                id: id
            }
        })
        dogCreate.setTemperaments(temperaments);
        res.json(dogCreate)
    }catch(error){
        res.json({error:"error"})
    }
});

module.exports = router;
