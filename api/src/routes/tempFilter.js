const { API_KEY } = process.env;
const { Router } = require('express');
const router = Router();
const axios = require('axios');
const {Dog, Temperament } = require('../db');

const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;

router.get('/:tempe', async (req, res) => {
    try{
        const {tempe} = req.params;
        let temperamentDogs;
    
        let dataIntermediate = await Temperament.findAll({
            include: {model: Dog}
        });

        // hay 124 temperamentos
        for(let i = 0; i < 124; i++){
            if(dataIntermediate[i].temperament === tempe){
                temperamentDogs = dataIntermediate[i].dogs;
            }
        }
        
        
        let resultsApi = await axios.get(URL);

        let dogsApi = [...resultsApi.data]
    
        dogsApi = await dogsApi && dogsApi.map(data => ({
            name: data.name,
            id: data.id,
            life_span: data.life_span,
            weight: data.weight.metric,
            height: data.height.metric,
            temperament: data.temperament,
            image: data.image.url
        }));

        // sacamos lo que no tienen temperaments
        let resultsTempe = dogsApi.filter(x => x.temperament !== undefined);

        // filtramos lo que tienen incluido el tempe
        let resultsFil = resultsTempe.filter(x => x.temperament.includes(tempe));

        // lo concatenamos y lo mandamos como json
        let resultsTotal = [...temperamentDogs, ...resultsFil];
        
        res.json(resultsTotal);

    }catch(error){
        console.log(error);
        res.status(400).json({error: 'error'})
    }

});


module.exports = router;