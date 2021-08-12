import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ByRaza } from '../../actions/actions';
import Detail from '../CardDetail/Detail';
import styled from 'styled-components';


const CardDetail = ({match}) => {

    const dispatch = useDispatch();
    const raza = useSelector(state => state.idRaza);
    const id = match.params.id;

    
    useEffect(() => {
        dispatch(ByRaza(`${id}`))
    },[dispatch, id]);



    return (
        <CardDiv>
            
            <Detail raza = {raza} />
        </CardDiv>
    )
}

export default CardDetail


const CardDiv = styled.div`
    display: flex;
    justify-content: center;
   margin-top: 60px;

`