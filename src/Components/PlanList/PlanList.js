import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LoadingContainer from '../../Containers/NavBarContainer/Loading'
import DatabaseData from './data'

const List = styled.div`
display: flex;
flex-direction: column;
padding: 2rem 0;
grid-gap: 1.5rem;
justify-content: center;
align-items: center; 
`
const Article = styled.article`
width: 100%;
padding: 1rem;
display: flex;
align-items: center;
grid-gap: 10px; 
flex-direction: column;
border-radius:5px;
color: white;
background-color: rgb(20, 175, 220);
`
const Number = styled.span`
font-size: calc(1vh + 1.5vw + 1rem);
font-weight: 600;
text-align: left;
margin-right: 10px;
padding:1rem 0;
`
const Button = styled.button`
font-weight: 600;
padding: 10px;
background-color: transparent;
color: white;
cursor: pointer;
font-size: 2rem;
border-radius: 5px;
border: 2px solid rgb(20, 195, 220);
`
const Upper = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
width: 100%;
`
const Lower = styled.div`
display: ${props => props.IsIn ? "flex" : "none"};
width: 100%;
margin: 0;
flex-direction: column;
padding: 2rem 10px;
font-size: 1.3rem;
text-align: left;
`

const ArticleDiv = ({ data }) => {
    const [Open, setOpen] = useState(false)
    const OpenDiv = () => {
        setOpen(!Open)
    }
    return <Article>
        <Upper>
            <Number>{data.id}. {data.title}</Number>
            <Button onClick={OpenDiv}>
                {
                    Open ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>
                }
                </Button>
        </Upper>
        <Lower IsIn={Open}>
     <p>{data.descripcion}</p>
     {
         data.li1 && <>
         <p>{data.li1}</p>
         <p>{data.li2}</p>
         <p>{data.li3}</p>
         <p>{data.li4}</p>
         <p>{data.li5}</p>
         <p>{data.li6}</p>
         <p>{data.li7}</p>
         <p>{data.li8}</p>
         <p>{data.li9}</p>
         <p>{data.li10}</p>
         </>
     }
     {
         data.descripcion2 && <p>{data.descripcion2}</p>
     }
    </Lower>
    </Article>
}

const PlanList = () => {
    const [Data, setData] = useState([])
    const [Loading, setLoading] = useState(true)
    useEffect(async () => {
        const JSONData = await DatabaseData()
        const data = JSON.parse(JSON.stringify(JSONData))
        setData(data)
        setLoading(false)
    }, [])
    return (
        <List>
            {
                Loading ?
                    <LoadingContainer /> : Data.map((info, idx) => {
                        return <ArticleDiv data={info} key={idx}/>
                    })
            }
        </List>
    )
}

export default PlanList
