import React , { Fragment, useState } from 'react'
import {useSelector} from 'react-redux';
import Card from '../Card/Card';
import styled from 'styled-components'

const Cards = () => {

    const filtered = useSelector(state => state.filtered)
    const created = useSelector(state => state.created)


    const [limit, setLimit] = useState(0);

    const decr =() => {
        setLimit(limit - 8);
    }

    const inc = () => {
        setLimit(limit + 8);
    }


    return (
        <Fragment>
            <Container>
            <Ctn>
                {
                    filtered.length === [] ? null : filtered.slice(limit, limit+8).map(dog => {

                        if(!dog.temperament){
                            for(let i = 0; i < created.length; i++){
                                if(dog.name === created[i].name){
                                    var temperaments = created[i].temperaments;
                                    if(!dog.image){
                                        dog.image = "https://cdn2.thedogapi.com/images/B1d5me547.jpg";
                                    }
                                    break;
                                }
                            }
                            return (
                                <span>
                                    <Card 
                                        key = {dog.id}
                                        image = {dog.image}
                                        name = {dog.name}
                                        temperament = {temperaments}
                                        id = {dog.id}
                                    />
                                </span>
                            )

                        }
                        return(
                            <span>
                                <Card 
                                    key = {dog.id}
                                    image = {dog.image}
                                    name = {dog.name}
                                    temperament = {dog.temperament}
                                    id = {dog.id}
                                />
                            </span>
                        )
                    })
                }
            </Ctn>
            </Container>
            <Paginado>
            {
                filtered && filtered.length !== 0 && limit !== 0 ? <button onClick={decr} className="btn">Prev</button>:null
            }
            {
                filtered.length !== 0 && limit !== filtered.length - (filtered.length % 8) && filtered.length > 8 ? <button onClick={inc} className="btn">Next</button>:null
            }
            </Paginado>
        </Fragment>
    )
}

export default Cards


const Container = styled.div`
    display: flex;
    justify-content: center;
    
    
`



const Ctn = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 920px){
        grid-template-columns: 1fr;
    }
        
`;



const Paginado = styled.div`    
    display: flex;
    justify-content: center;
    margin-top: 30px;

    .btn{
        border-radius: 10px;
        border: 2px solid #000;
        color: #000;
        cursor: pointer;
        padding: 10px;
        background-color: transparent;
        font-size: 1rem;
        margin: 20px;
        margin-top: 40px;
        padding-top: 10px;
        outline: 0px;
        font-weight: bold;
        font-family: 'Georama', sans-serif;
    }

    .btn:hover , btn:focus{
        font-size: 1.2rem;
        border: 2px solid #fff;
        color: #fff        
    }


`;
