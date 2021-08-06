import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {getAllDogs, getTemperaments, SortAZ, SortZA, SortASC, SortDESC} from '../../actions/actions'
import Cards from '../Cards/Cards';
import styled from 'styled-components';

function Home() {
    const dispatch = useDispatch()
    const temperamentsElem = useSelector(state => state.temperamentsElem)

    useEffect(() => {
        dispatch(getTemperaments())
    },[dispatch])


    const selectCreated = (e) => {
        const value = e.target.value;
        return value === "All" ?  dispatch(getAllDogs()) : null
        // falta los creados por nosotros
    }

    const filterOrder = (e) => {
        const value = e.target.value;
        return( 
            value === 'Alf A-Z'? dispatch(SortAZ()) :
            value === 'Alf Z-A' ? dispatch(SortZA()) :
            value === 'Weight ASC' ? dispatch(SortASC()) :
            value === 'Weight DESC'? dispatch(SortDESC()) :
            null
        )
    }

    return (
        <div>
            <CtnHome>
                <div>
                    {!temperamentsElem?<h3>Loading...</h3>:
                        <select className="selects">
                            <option key={1} value={""}>Temperament</option>
                            {
                                temperamentsElem.map((item, i) => (
                                    <option key={i} value={item}>{item}</option>
                                ))
                            }
                        </select>
                    }
                </div>

                <div>
                    <select onChange={selectCreated} className="selects">
                        <option value="">Source</option>
                        <option value="All">All</option>
                        <option value="Created">Created</option>
                    </select>
                </div>


                <div>
                    <select onChange={filterOrder} className="selects">
                        <option value="">Sort</option>
                        <option value="Alf A-Z">Alf A-Z</option>
                        <option value="Alf Z-A">Alf Z-A</option>
                        <option value="Weight ASC">Weight ASC</option>
                        <option value="Weight DESC">Weight DESC</option>
                    </select> 
                </div>

                    
            </CtnHome>

            {/*Aca van las Cards*/}
            <Cards/>
        </div>
    )
}

export default Home



const CtnHome = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height:50px;
    align-items: center;
    border-bottom: 2px solid #fff;
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    

    .selects{
        background-color: transparent;
        color: #000;
        border: thin solid #000;
        margin-right: 20px;
        margin-left: 20px;
        outline: 0px;
        font-size: 18px;
        font-weight: bold;
        font-family: 'Georama', sans-serif;
    }

    .selects  option{
        background-color: #666666;
        font-weight: bold;
    }

    @media (max-width:900px){
        .selects{
            margin-right: 5px;
            margin-left: 5px
        }
    }

    
    .selects:focus{
    border: 3px solid rgba(50,50,50,0.3);
    /* transform: translateY(-4%); */
    transition: all 0.3s ease;
}

`;