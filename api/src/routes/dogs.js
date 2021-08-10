const { Router } = require('express');
const { Dog } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;
const router = Router();
const {Op} = require('sequelize');


// pagina de la api
const URL = `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`;

router.get('/', async (req, res) => {
    
    // recibimos name por query parameter   
    const {name} = req.query;


    // si no ingresamos name
    if(!name){
        //hacemos un try, catch
        try{
            let resultsApi = await axios.get(URL);
            
            // al resultApi el json lo convierto en un array
            let dogsApi = [...resultsApi.data];

            // si existe entonces hago un map y asi tengo lo que necesito
            dogsApi = await dogsApi && dogsApi.map(data => ({
                name: data.name,
                id: data.id,
                life_span: data.life_span,
                weight: data.weight.metric.split(' - ').map(x => Number(x)), // para poder hacer el sort
                height: data.height.metric,
                temperament: data.temperament,
                image: data.image.url
            }));

            let resultsDb = await Dog.findAll()

            // con el ... concateno dogsApi y con el resultado de la base de datos
            let totalDogs = [...dogsApi, ...resultsDb];

            console.log(totalDogs.length)// hay 172
            console.log(totalDogs)
            return res.status(200).json(totalDogs)

        }
        catch(error){
            return res.send(error);
        }
    }

    // si existe el name
    if(name){
        try{
            let resultsApi = await axios.get(URL);

            let dogApiFilter = resultsApi.data.filter( dog => dog.name.toLowerCase().includes(`${name.toLowerCase()}`));

            dogApiFilter = dogApiFilter && dogApiFilter.map(data => ({
                name: data.name,
                id: data.id,
                life_span: data.life_span,
                weight: data.weight.metric.split(' - ').map(x => Number(x)), // para poder hacer el sort
                height: data.height.metric,
                temperament: data.temperament,
                image: data.image.url
            }))

            let resultsDb = await Dog.findAll({
                where:{name:{
                    [Op.iLike] : `%${name}%`
                }}
            });

            let dogsName = [...dogApiFilter, ... resultsDb];

            dogsName.length === 0 ? res.send([]) : res.json(dogsName)
            
        }catch(error){
            res.send(error);
        }
    }

});


module.exports = router;
