const { API_KEY } = process.env;
const { Router } = require('express');
const { Dog } = require('../db');
const axios = require('axios');
const router = Router();

const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;

router.get('/:idRaza', async(req,res) => {
    const id = req.params.idRaza;

    // si es menor a 10 puede venir de la api o no existir
    if(id.length < 10 ){
        try{
            const resultApi = await axios(URL);
            const result = resultApi.data.filter( dog => dog.id === Number(id) );
            
            const newResult = result && result.map(data => ({
                name: data.name,
                id: data.id,
                life_span: data.life_span,
                weight: data.weight.metric,
                height: data.height.metric,
                temperament: data.temperament,
                image: data.image.url
            }));
            
            newResult.length === 0 ? res.json({error: 'id no encontrado'}) : res.json(newResult);

        }catch(error){
            res.status(500).json({error: 'error'});
        }
    }else{ // en caso de ser mayor viene de la base de datos o no existir
        try{
            const resultDb = await Dog.findByPk(id);
            console.log(resultDb)
            res.json(resultDb);
        }catch(error){
            res.status(500).json({error: 'id no encontrado'})
        }
    }
})

module.exports = router;
