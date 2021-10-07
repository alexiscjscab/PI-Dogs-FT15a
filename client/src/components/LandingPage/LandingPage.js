import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {GoHome} from 'react-icons/go';
import fondo from '../../img/fondo.jpg';
// import gif from '../../img/dog2Gif.gif';


const LandingPage = () => {
    return (
        <Container>
            <div className='title'>
                <h1>Dogs</h1>
            </div>
            <div className='botton'>
                <Link to = '/home'>
                    <GoHome className='btn'/>
                </Link> 
            </div>

        </Container>
    )
}



const Container = styled.div`
    display: grid;
    background: url(${fondo});
    background-size: 100% 100%;
    position: fixed;
    background-attachment: fixed;
    width: 100%;
    height: 100%;
    text-align: center;


    .title{
        font-size: 70px;
        padding-top: 5rem;
        color: #000;
        cursor: alias;
        font-family: 'Style Script', cursive;
        h1{
            display: inline;
        }

    }

    .botton{
        display: flex;
        justify-content: center;
        a{
            text-decoration: none;
        }
    }    
   
    

    .btn{
        border: 2px solid #000;
        font-size: 70px;
        padding: 20px;
        font-weight: bold;
        color: #000;
        border-radius: 50%;
        background-color: rgba(100,100,100,0.4);
    }

    .btn:hover{
        font-size: 80px;
        box-shadow: 0 2px 30px  inset #fff, 0 2px 50px #fff;
        border: 2px solid #fff;
        color : #fff;
    }
    

    @media (max-width: 600px){
        .title{
            font-size: 55px;
        }
        .btn{
            font-size: 50px;
            padding: 15px;
        }

        
        .btn:hover{
            font-size: 60px;
        }     
        
    }
    `;
    





export default LandingPage;