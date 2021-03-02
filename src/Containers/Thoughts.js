import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
padding: 2rem 5vw;
h2{
    font-size: 2.5rem;
    text-align: center;
    font-weight: 500;
}
`
const Grid = styled.section`
display: flex;
flex-wrap: wrap;
padding: 2rem 0;
align-items: center;
grid-gap: 2rem;
justify-content: center;
`
const Article = styled.article`
width: 320px;
height: 28rem;
border: 5px solid rgb(20, 175, 220);
border-radius: 5px;
display: flex;
padding: 1rem;
flex-direction: column;
text-align: center;
align-items: center;
justify-content: center;
i{
    font-size: 5rem;
}
`
const Description = styled.p`
font-size: 1.5rem;
margin-top: 3rem;
`

const Thoughts = () => {
    return (
        <Div>
            <h2>
                Pensamiento del partido
            </h2>
            <Grid>
                <Article>
                    <i className="fas fa-cross"></i>
                    <Description>El pensamiento político tiene como base la doctrina social cristiana, que prioriza el bienestar de todo individuo.</Description>
                </Article>
                <Article>
                <i className="fas fa-eye-slash"></i>
                    <Description>No toleraremos la corrupción, expulsaremos, incautaremos y encarcelaremos a todas la empresas corruptas, incluyendo sus cómplices.</Description>
                </Article>
                <Article>
                <i className="fas fa-users"></i>
                    <Description>Creemos en la libertad de comercio acompañado de un rostro social.</Description>
                </Article>
                <Article>
                <i className="fas fa-baby"></i>
                    <Description>Defendemos la vida desde la concepción y a la familia como el núcleo de nuestra sociedad.</Description>
                </Article>
                <Article>
                <i className="fas fa-hospital-user"></i>
                    <Description>Tenemos como objetivo implementar un sistema de salud descentralizado y focalizado.</Description>
                </Article>
                <Article>
                <i className="fas fa-road"></i>
                <Description>Creemos que un país desarrollado, parte desde una buena infraestructura y óptimas carreteras.</Description>
                </Article>
            </Grid>
        </Div>
    )
}

export default Thoughts
