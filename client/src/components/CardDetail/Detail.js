import { GoHome } from 'react-icons/go';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Detail = ({raza}) => {
    
    
    return (

        <div>
            
                
                { raza.length > 0 &&  raza.map(r => (
                    <Ctn>
                        <div className='title'>
                        <h1>{r.name}</h1>
                        <img src={r.image}   alt={r.name}/>
                
                        </div>
                        <div className='temperaments'>
                            <h4>Temperaments: </h4>
                            <p>{r.temperament} .</p>
                        </div>
                        <div className='dates'>
            
                            <p>Weight: {r.weight} .</p>
                    
                            <p>Height: {r.height} .</p>
            
                            <p>Life Span: {r.life_span} .</p>
                        </div>
                   
                    </Ctn>    
                ))
            }
            <Btn>
            <Link to ='/home'>
                <span ><GoHome className = 'btn'/></span>
            </Link>
            </Btn>
            
            
        </div>
    )
}

export default Detail


const Ctn = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    text-align: center;
    background-color: rgba(238,174,202,0.8);
    width: 490px;
    border-radius: 50px;
    font-family: 'Abril Fatface', cursive;
    letter-spacing: 0.1em;
    cursor: alias;
    border: 4px solid #fff;
    color: #222;

    p{margin-top: 5px}

    img{
        width: 280px;
        height: 280px;
        border-radius: 50px;
        border: 2px solid #fff;
        margin-bottom: 10px;
    }

    img:hover{
        width: 300px;
        height:300px
    }
    
    .title{
        margin-bottom: 10px;
        font-size: 22px;
        margin-top: 10px;
        border-bottom: 2px solid #fff;
        h1{
            margin-bottom: 10px;
        }
        
    }
    .temperaments{
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 22px;
        font-weight: bold;
        p{
            margin-bottom:10px;
        }
        border-bottom: 2px solid #fff;
    }

    .temperaments:hover{
        font-size: 24px;
    }

    .dates{
        margin-bottom: 15px;
        font-size: 22px;
        font-weight: bold;
    }

    .dates:hover{
        font-size: 24px;
    }

   

`

const Btn = styled.div`
    text-align:center;
    margin-top: 40px;
    .btn{
        color: #000;
        font-size: 40px;
        border: 2px solid #000;
        border-radius: 50%;
        padding: 8px;
    }

    .btn:hover{
    color: #fff;
    font-size: 42px;
    border: 2px solid #fff;
}

    a{
        text-decoration: none;
    }


`