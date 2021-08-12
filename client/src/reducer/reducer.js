const initialState = {
    temperamentsElem : undefined,
    filtered: [],
    created: [],
    idG: -1,
    idRaza: []

};

const rootReducer = (state = initialState, {type, payload}) => {

    switch(type){

        case 'SEND_TEMPERAMENTS':
            return{
                ...state,
                temperamentsElem : payload.map(x => x.temperament)
            };


        case 'FILTER_BREED_DOGS':
            return{
                ...state,
                filtered: payload
            } 
            

        case 'SAVED_CREATED':
            return {
                ...state,
                created: [...state.created, payload],
                idG: state.idG - 1
            }    
        case 'SEARCH_CREATED':
            return{
                ...state,
                created : state.created,
                filtered:[]

            }

        case 'SORT_AZ': 
            let resultAZ = payload.sort((a,b) => {
                if(a.name > b.name) return 1;
                if(a.name < b.name) return -1;
                return 0;
            })
            return{
                ...state,
                filtered : resultAZ
            }

        case 'SORT_ZA':
            let resultZA = payload.sort((a,b) => {
                if(a.name < b.name) return 1;
                if(a.name > b.name) return -1;
                return 0
            })

            return{
                ...state,
                filtered: resultZA
            }

        case 'SORT_ASC':
            let resultASC = payload.sort((a,b) => {
                if(a.weight[0] > b.weight[0]) return 1
                if(a.weight[0] < b.weight[0]) return -1
                return 0
            })

            let resultA = resultASC.slice(2,)
            return {
                ...state,
                filtered : resultA
            }

        case 'SORT_DESC':
            let resultDESC = payload.sort((a,b) => {
                if(a.weight[0] < b.weight[0]) return 1
                if(a.weight[0] > b.weight[0]) return -1
                return 0
            })    
            
            let resultD = resultDESC.slice(0, resultDESC.length-2)

            return {
                ...state,
                filtered : resultD
            }

        case 'BY_TEMPERAMENT':
            return{
                ...state,
                filtered: payload
            }

        case 'BY_RAZA':
            return{
                ...state,
                idRaza : payload
            }

        default:
            return state;
    }
};

export default rootReducer;