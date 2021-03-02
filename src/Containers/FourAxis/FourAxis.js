import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import LoadingContainer from '../NavBarContainer/Loading'
import DatabaseData from './data'

const Div = styled.div`
padding: 1rem 5vw;
display: flex;
flex-direction: column;
h2{
    text-align: center;
    font-size: 3rem;
    font-weight: 500;
}
`

const FieldSet = styled.fieldset`
border-color: rgb(20, 175, 220);
border-style: solid;
margin-bottom: 2rem;
padding: 20px;
border-radius: 10px;
legend{
    text-align: center;
    background-color:rgb(20, 175, 220);
    color: rgb(240, 240, 240);
    padding: 10px;
    border-radius: 5px;
    font-size: 3rem;
}
p{
    font-size: 25px;
    padding-bottom: 1rem;
}
span{
    font-size: 2.4rem;
    color:rgb(0, 05, 30);
}
`

const FieldSetContainer = ({info}) => {
    return <FieldSet>
        <legend>{info.legend}</legend>
        <p>{info.description}</p>
        <span>¿Cómo lo haremos?</span>
        <p>{info.how}</p>
    </FieldSet>
}

const FourAxis = () => {
    const [Data, setData] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(async () => {
        const JSONData = await DatabaseData()
        const data = JSON.parse(JSON.stringify(JSONData))
        setData(data)
        setLoading(false)
    }, [])
    return (
        <>
           {
               Loading ? <LoadingContainer/> : 
               <Div>
                    <h2>Los cuatro ejes de la doctrina social-cristiana</h2>
                   {
                       Data && Data.map((info,idx) => {
                           return  <FieldSetContainer info={info} key={idx}/>  
                       })
                   }
               </Div>
           }
        </>
    )
}

export default FourAxis
