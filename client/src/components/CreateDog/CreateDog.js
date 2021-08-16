import React, {  useState } from 'react';
import { saveCreated } from '../../actions/actions';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import dogCreate from '../../img/dogcreate4.gif'
import { Link } from 'react-router-dom';
import { GoHome } from 'react-icons/go';
import { GoTrashcan } from 'react-icons/go'

const CreateDog = () => {

    const [name , setName] = useState('');
    const [heightMin , setHeightMin] = useState('');
    const [heightMax, setHeightMax] = useState('');
    const [weightMin , setWeightMin] = useState('');
    const [weightMax, setWeightMax] = useState('');
    const [yearMin, setYearMin] = useState('');
    const [yearMax, setYearMax] = useState('');
    const [image, setImage] = useState('');
    const [selec, setSelec] = useState([]);

    const [dogAlert , setDogAlert] = useState(false);

    const temperamentsElem = useSelector(state => state.temperamentsElem);
    const idG = useSelector(state => state.idG)

    const dispatch = useDispatch()


    const changeSelect = (e) => {
        setSelec([...selec, e.target.value])
    }

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeHeightMin = (e) => {
        setHeightMin(e.target.value)
    }

    const changeHeightMax = (e) => {
        setHeightMax(e.target.value)
    }

    const changeWeightMin = (e) => {
        setWeightMin(e.target.value)
    }

    const changeWeightMax = (e) => {
        setWeightMax(e.target.value)
    }

    const changeYearMin = (e) => {
        setYearMin(e.target.value)
    }

    const changeYearMax = (e) => {
        setYearMax(e.target.value)
    }

    const changeImage = (e) => {
        setImage(e.target.value)
    }


    const send = async (e, name, heightMin, heightMax, weightMin, weightMax, yearMin, yearMax, image, selec, dogAlert) => {
        e.preventDefault()

        // concatenamos la edad, peso y altura
        let height = `${heightMin} -  ${heightMax}`
        let weight = `${weightMin} -  ${weightMax}`;
        let life_span = `${yearMin} -  ${yearMax} years`;

        // aca creamos el objeto que mandamos a la base de datos
        let dataBase = {
            name,
            life_span,
            weight,
            height,
            image,
            temperaments: selec
        }; // no  hace falta id porque lo hacemos en el back

        // hacemos el post 

        await axios.post(`http://localhost:3001/dog`, dataBase)

        
        let datosStore = {
            name,
            life_span,
            weight,
            height,
            image,
            temperaments: selec,
            id: idG
        }

        dispatch(saveCreated(datosStore))

        setTimeout(() => {
            e.target.reset()
            setDogAlert(false);
            setName('');
            setHeightMax('');
            setHeightMin('');
            setYearMin('');
            setYearMax('');
            setWeightMin('');
            setWeightMax('');
            setImage('');
            setSelec([]);
        },2000)
    }

    const deleteKey = (key) => {
        
        let update = selec.filter(x => selec[key] !== x);
        setSelec(update);
    }


    const alertDog = () => {
    
        if(name !== '' && heightMin !== '' && heightMax !== '' && weightMin !== '' && weightMax !== '' && yearMin !== '' && yearMax !== ''){
            setDogAlert(!dogAlert)
        }
        
    }

    

    return(
        <div>
        <CtnForm>

            <form onSubmit={(e) => send(e,name,heightMin,setHeightMax,weightMin,weightMax,yearMin, yearMax, image, selec, dogAlert)} className='form' id='form'>

                <div className='containers large'>
                    <label>Name:</label>
                    <input 
                        type = 'text' 
                        placeholder='name' 
                        value={name}
                        required
                        onChange={(e) => changeName(e)} 
                    />
                </div>

                <div className='containers'>
                    <label>Height:</label>
                    <input 
                        type = 'number' 
                        min = '0'
                        placeholder='min' 
                        value={heightMin} 
                        required
                        onChange={(e) => changeHeightMin(e)}
                    />
                    <input 
                        type = 'number' 
                        min = '0'
                        placeholder='max' 
                        value={heightMax} 
                        required
                        onChange={(e) => changeHeightMax(e)}
                    />
                </div>

    
                <div className='containers'>
                    <label>Weight:</label>
                    <input 
                        type = 'number' 
                        min = '0'
                        placeholder='min' 
                        value={weightMin} 
                        required
                        onChange={(e) => changeWeightMin(e)}
                    />
                    <input 
                        type = 'number' 
                        min = '0'
                        placeholder='max' 
                        value={weightMax} 
                        required
                        onChange={(e) => changeWeightMax(e)}
                    />
                </div>

                <div className='containers'>
                    <label>Life Span:</label>
                    <input 
                        type = 'number'
                        min = '0' 
                        placeholder='min' 
                        value={yearMin} 
                        required
                        onChange={(e) => changeYearMin(e)}
                    />
                    <input 
                        type = 'number'
                        min = '0' 
                        placeholder='max' 
                        value={yearMax} 
                        required
                        onChange={(e) => changeYearMax(e)}
                    />
                </div>

                <div className="containers large" >
                    <label>Imagen Url:</label>
                    <input 
                        type="text" 
                        value={image} 
                        placeholder="url"
                        onChange={(e) => changeImage(e)} 
                    />
                </div>

                <div className="containers">
                <label>Temperaments:</label>
                    {!temperamentsElem?null:
                        <select className='selects' onChange={changeSelect} required>
                            <option key={-1} value={""}></option>
                            {
                                temperamentsElem.map((item, index) => (
                                    <option 
                                        key={index} 
                                        value={item}>{item}
                                    </option>
                            ))
                        }
                    </select>
                    }
                </div>

                <div className="keys">
                {
                    selec.map((item, index) => (
                        <div key={index}>
                            <span>{item}</span>
                            <span onClick={(key) => deleteKey(index)} className="key"><GoTrashcan/></span>
                        </div>
                    ))
                }
                </div>
                <div className="containers btn">
                    <input type="submit" value="Create" onClick={alertDog} />
                </div>
                    
            </form>
            
        </CtnForm>
        <CtnHome>
            <CtnDown>
            {
                dogAlert ? <h1 className='alert'>Creado con exito</h1> : null
            }
            <Link to='/home'>
               <p><GoHome className='icon'/></p>
            </Link>
            </CtnDown>  
        </CtnHome>
        </div>
    )

}   


const CtnDown = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    .alert{
        margin-bottom: 20px;
        font-family: 'Georama', sans-serif;
        text-shadow: 0.1em 0.1em #fff;
    }

`


const CtnHome = styled.div`
display: flex;
justify-content: center;
margin-top: 30px;

a{
    text-decoration: none;
}

.icon{
    color: #000;
    font-size: 40px;
    border: 2px solid #000;
    border-radius: 50%;
    padding: 8px;
}

.icon:hover{
    color: #fff;
    font-size: 42px;
    border: 2px solid #fff;
}
`

const CtnForm = styled.div `
    display: flex;
    justify-content: center;
    
    margin-top: 60px;
    font-family: 'Georama', sans-serif;
    
    
    .form{
        background-color: rgba(238,174,202,0.9);
        display: flex;
        flex-direction: column;
        box-shadow: 0  2px 50px #fff;
        font-family: 'Georama', sans-serif;
        background: url(${dogCreate});
        background-size:100% 100%;

    
        label{
            border-bottom: 2px solid #000;
            margin-right: 20px;
            font-size: 28px;
            cursor: alias;
        }
    }
    
    

    .containers{
        margin: 28px;
        font-size: 18px;
        font-weight: bold;
        
        input{
            margin-right: 8px;
            margin-left: 8px;
            width: 100px;
            height: 20px;
            font-size: 18px;
            font-weight: bold;
            outline: 0px;
            font-family: 'Georama', sans-serif;
            background-color: rgba(255,255,255,0.5);
            border: 5px solid #000;
            text-align: center;
            

           
        }    

        input::placeholder{
            color: #000;
            text-align: center;
            font-size: 18px;
            text-transform: uppercase;
        }
        input:focus{
            border: 5px solid #fff;
            color: #000
        }

        

        .selects{
            background-color: trasparent;
            font-family: 'Georama', sans-serif;
            font-size: 18px;
            border: 5px solid #000;
            font-weight: bold;
            outline: 0px;
        }

        .selects option{
            color: #000;
            background-color: #666;
            font-weight: bold;
        }

        .selects:focus{
            border: 5px solid #fff;
        }  
    }

    .btn{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        input{
            border: 2px solid #000;
            border-radius: 50px;
            height: 30px;
            width: 90px;
            margin: 10px;
            cursor: pointer;
        
        }
        input:hover{
            color: #fff;
            background-color: #000;
            border: 2px solid #fff;
            box-shadow: 0 0 5px inset #fff, 0 0 5px #fff;
        }
        
    }

    .keys{
        display: flex;
        justify-content: center;
        margin-left: 2px;
        font-weight: bold;
        font-size: 20px;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;

        div{
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        .key{
            margin-left: 5px;
            margin-right: 5px;
            cursor: pointer;
            font-weight: bold;
            font-size:22px;
            color: rgba(255,20,20);
        }
    }

    .large{
        input{
            width: 190px;
        }
    }

    

`



export default CreateDog;
