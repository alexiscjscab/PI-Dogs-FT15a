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
            <Paginado>
            {
                filtered.length !== 0 && limit !== 0 ? <button onClick={decr} className="btn">Prev</button> : null
            }
            {
                filtered.length !== 0 && limit !== filtered.length - (filtered.length % 8) && filtered.length > 8 ? <button onClick={inc} className="btn">Next</button> : null
            }
            </Paginado>
            <Container>
            <Ctn >
                {
                
                     filtered.length === 0 ? null : filtered.slice(limit, limit+8).map(dog => {

                        if(!dog.image){
                            dog.image = 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg'
                        }
                        
                        
                        return(
                            <Card 
                                key = {dog.id}
                                image = {dog.image}
                                name = {dog.name}
                                temperament = {dog.temperament} 
                                id = {dog.id}
                            />
                            
                        )
                    }) 
                }
            
            
                {
                    filtered.length === 0 && created && created.slice(limit, limit+8).map(dog => {

                        // si no tiene imagen agrega una por defecto
                        if(!dog.image){
                            dog.image = 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg'
                        }

                
                        return(
                            <Card 
                                key = {dog.id}
                                image = {dog.image}
                                name = {dog.name}
                                temperament = {dog.temperaments}
                                id = {dog.id}
                            />
                        )
                    }) 
                }
            </Ctn>
            </Container>

            <Paginado>
            {
                filtered.length !== 0 && limit !== 0 ? <button onClick={decr} className="btn">Prev</button> : null
            }
            {
                filtered.length !== 0 && limit !== filtered.length - (filtered.length % 8) && filtered.length > 8 ? <button onClick={inc} className="btn">Next</button> : null
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
