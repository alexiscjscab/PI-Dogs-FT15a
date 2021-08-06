import axios from 'axios';

// traemos todos los dogs de la api
export const getAllDogs = () => {
    return async function(dispatch){
        let res = await axios.get('http://localhost:3001/dogs');
        let result = res.data;
        dispatch(sendDogName(result));
    }
}

// Buscamo por nombre en la api
export function filterNameDog(nombre){
    return async function(dispatch){
        let res = await axios.get(`http://localhost:3001/dogs?name=${nombre}`);
        let result = res.data;
        dispatch(sendDogName(result));
    }
}

// filtra por nombre o todos y lo envia al store
export const sendDogName = (data) =>{
    return{
        type: 'FILTER_BREED_DOGS',
        payload: data
    }
}


// traemos todos los temperamentos de la api
export const getTemperaments = () => {
    return function async (dispatch){
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
        type: "SAVE_CREATED",
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
export const SortAZ = () => {
    return async (dispatch) => {
        let res = await axios.get(`http://localhost:3001/dogs`)
        let result = res.data
        dispatch(Sort_AZ(result));
    }
}

// mando al reducer 
export const Sort_AZ = (data) => {
    return {
        type: 'SORT_AZ',
        payload: data
    }
}



// sort Z - A
export const SortZA = () => {
    return async (dispatch) => {
        let res = await axios.get(`http://localhost:3001/dogs`)
        let result = res.data
        dispatch(Sort_ZA(result));
    }
}

// mando al reducer
export const Sort_ZA = (data)  => {
    return {
        type: 'SORT_ZA',
        payload: data
    }
}

// ordenado asc por el peso
export const SortASC = () => {
    return async (dispatch) => {
        let res = await axios.get(`http://localhost:3001/dogs`)
        let result = res.data
        dispatch(dispatch(Sort_ASC(result)))
    }
}

// mando al reducer
export const Sort_ASC = (data) => {
    return{
        type: 'SORT_ASC',
        payload: data
    }
}


// ordenado por desc
export const SortDESC = () => {
    return async (dispatch) => {
        let res = await axios.get(`http://localhost:3001/dogs`)
        let result = res.data
        dispatch(Sort_DESC(result))
    }
}

// mando al reducer
export const Sort_DESC = (data) => {
    return{
        type: 'SORT_DESC',
        payload: data
    }
}