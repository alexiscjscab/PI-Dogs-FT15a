import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {GoSearch} from 'react-icons/go';
import {filterNameDog} from '../../actions/actions';
import { useDispatch } from 'react-redux';

const NavBar = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }    

    const searchName = (name) => {
        dispatch(filterNameDog(name));
    }

    return (
        <Nav>
            <div className='ctn'>
                <div className='input' > 
                    <div> 
                        <input 
                            type='text' 
                            placeholder='Search Dog...'
                            value = {name} 
                            onChange={handleChange}
                            
                        />
                        <button 
                            className='btn' 
                            onClick={() => searchName(name)}
                            >
                            <GoSearch className='icon'/>
                        </button>
                    </div>
                </div>
                
        
                <Link to ='/createDog' >
                    <button className='btn'>New</button>
                </Link>
                
            </div>
        </Nav>
    )
}

export default NavBar


const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    
  
   
    a{
        text-decoration: none;
    }

    .ctn{
       display: flex;
       justify-content: space-between;
       align-items: center;
    }
    
    
    .input{
        border-radius: 5px;
        input{
            margin-right: 16px;
            height: 28px;
            border: 2px solid #000;
            outline: 0px;
            background: transparent;
            text-align: center;
            width: 200px;
            font-family: 'Georama', sans-serif;
            text-transform: capitalize;
        }

        input:hover{
            border: 2px solid #fff;
            color: #fff;
            
        }

        input::placeholder{
            color: #fff;
            font-family: 'Georama', sans-serif;
        }

        
    }

    .btn{
        margin-right: 20px;
        border-radius: 50%;
        outline: 0px;
        color: #000;
        background: transparent;
        border: 2px solid #000;
        font-size: 18px;
        font-weight: bold;
        width: 50px;
        height: 40px;
        font-family: 'Georama', sans-serif;
        
    }

    
    .btn:hover{
        box-shadow: 0 0 5px inset #fff, 0 0 5px #fff;
        cursor: pointer;
        color: #fff;
        border-color: #fff;
    }

    .icon{
        position: relative;
        top: 2px;
    }

    
`;

