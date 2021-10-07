import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Card = ({image, name , id, temperament}) => {


    
    return (
        <CardCtn>
            <div>
                <p className='name'>{name}</p>
                <br/>
                <Link to={`/description/${id}`}>
                    <span className='columns'>
                        <img src={image} alt='not found'/>
                    </span>
                </Link>
                
                <br></br>
                <p className='temperament'>{temperament}</p>
            </div>
        </CardCtn>
    )
}

export default Card

const CardCtn = styled.div`

    div{
        margin-top: 40px;
        padding: 20px;
        height: 390px;
        width: 370px;
        border: 2px solid #fff;
        text-align: center;
        background-color:rgba(238,174,202,0.666);
        border-radius: 50px;
        margin-right: 8px;
        margin-left: 8px;
        color: #222;

        p{
            font-family: 'Abril Fatface', cursive;
            letter-spacing: 0.1em;
        }
    }

    @media (max-width: 2000px){
        margin-right: 6px;
        margin-left: 6px;
        
    }

    @media (max-width: 900px){
        div{
            margin-right: 4px;
            margin-left: 4px;
        }
    }

    div:hover{
        box-shadow: 0 6px 6px 6px #fff inset, 0 6px 6px 6px #fff;
        border: 2px solid #fff;
        
    }
    
    img{
        width: 200px;
        height: 200px;
        border-radius: 50px;
        border: 2px solid #fff;
        
    }

    .columns{
        margin-right: 40px;
        margin-left: 40px;
    }

    .name{
        display: flex;
        justify-content: center;
        font-size: 20px;
        font-weight: bold;
        margin-top: 10px;
    }

    .temperament{
        display: flex;
        justify-content: space-evenly;
        text-align: center;
        flex-wrap: wrap;
        font-size: 18px;
        font-weight: bold;
        margin-top: 20px;
        width: 100%;
    }
`


