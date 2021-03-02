import React from 'react'
import styled from 'styled-components'
import PlanList from '../../Components/PlanList/PlanList'

const Div = styled.div`
padding: 1rem 5vw;
text-align: center;
`
const H2 = styled.h2`
font-size: 35px;
`
const H3 = styled.h3`
font-size: 30px;
opacity: .7; 
`

const HomeContainer = () => {
    return (
        <Div>
            <H2>¡Perú, potencia mundial!</H2>
            <H3>Plan de los 100 días de renovación popular</H3>
            <PlanList/>
        </Div>
    )
}

export default HomeContainer
