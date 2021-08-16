import axios from 'axios';

// traemos todos los dogs de la api
export const getAllDogs = () => async (dispatch) => {
    try{
        let res = await axios.get('http://localhost:3001/dogs');
        let result = res.data;
        dispatch({
            type: 'GET_DOGS',
            payload: result
        })
    }catch(error){
        console.log(error)
    }
}

// Buscamo por nombre en la api
export const filterNameDog = (name) => async(dispatch) =>{
    try {
        let res = await axios.get(`http://localhost:3001/dogs?name=${name}`);
        let result = res.data;
        dispatch({
            type: 'GET_DOGS_NAME',
            payload: result
        })
    } catch (error) {
        console.log(error)
    }
}

// traemos todos los temperamentos de la api ME TRAE UNA PROMESA
export const getTemperaments = () => {
    return async (dispatch) => {
        axios.get('http://localhost:3001/temperament')
        .then(temperaments => temperaments.data)
        .then(temperaments => dispatch(sendTemperaments(temperaments)))
        .catch(error => console.log(error)); 
    }
}

export const sendTemperaments = (data) => {
    return{
        type: 'SEND_TEMPERAMENTS',
        payload: data,
    }
}

// crear raza y la almacenamos en el store
export function saveCreated(created){
    let obj = {
        name: created.name,
        life_span: created.life_span,
        weight: created.weight,
        height: created.height,
        image: created.image,
        id: created.id,
        temperaments: created.temperaments.join(", ")
    };
    return {
        type: "SAVED_CREATED",
        payload: obj
    }
}

// buscar creados
export const searchCreated = (data) => {
    return{
        type: 'SEARCH_CREATED',
        payload: data
    }
}

// sort de A - Z
export const SortAZ = () => async(dispatch) => {
    try {
        let res = await axios.get(`http://localhost:3001/dogs`)
        let result = res.data
        dispatch({
            type: 'SORT_AZ',
            payload: result
        })
    } catch (error) {
        console.log(error)
    }
}

// sort Z - A
export const SortZA = () => async (dispatch) => {
    try {
        let res = await axios.get(`http://localhost:3001/dogs`)
        let result = res.data
        dispatch({
            type: 'SORT_ZA',
            payload: result
        })
    } catch (error) {
        console.log(error)
    }
}

// ordenado asc por el peso
export const SortASC = () => async (dispatch) => {
    try {
        let res = await axios.get(`http://localhost:3001/dogs`)
        let result = res.data
        dispatch({
            type: 'SORT_ASC',
            payload: result
        })
    } catch (error) {
        console.log(error)
    }
}

// ordenado por desc
export const SortDESC = () => async (dispatch) =>{
    try {
        let res = await axios.get(`http://localhost:3001/dogs`)
        let result = res.data
        dispatch({
            type: 'SORT_DESC',
            payload: result
        })
    } catch (error) {
        console.log(error)
    }
}

// Filtrado por temperament
export const ByTemperament = (data) => async (dispatch) => {
    try {
        let res = await axios.get(`http://localhost:3001/temp/${data}`);
        let result = res.data;
        dispatch({
            type: 'BY_TEMPERAMENT',
            payload: result
        })
    } catch (error) {
        console.log(error)
    }
}

// por id de raza
export const ByRaza = (id) => async (dispatch) =>{
    try {
        let res = await axios.get(`http://localhost:3001/idRaza/${id}`)
        let result = res.data;
        dispatch({
            type: 'BY_RAZA',
            payload: result
        })
    } catch (error) {
        console.log(error)
    }
}

