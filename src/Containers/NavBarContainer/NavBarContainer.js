import React, {useState} from 'react'
import styled from 'styled-components'
import LogoImage from "./images.jpeg"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';

const Logo = styled.img`
width: 5rem;
height: 5rem;
`
const NavLinks = styled.div`
display: flex;
grid-gap: 1rem;
a{
    font-size: 1.3rem;
    color: white;
    padding: 10px;
    text-align: center;
    border: 2px solid rgb(20, 195, 220);
}
i{
    font-size: 3rem;
}
`

const NavBarContainer = () => {

    const Matches = useMediaQuery("(max-width: 600px)")
const [Aside, setAside] = useState(false)
const changeAsideValue = () => {
    setAside(!Aside)
}
    return (
      <>
        <nav>
            <Link to="/"><Logo src={LogoImage}/></Link>
           {
               Matches ? <i className="fas fa-bars" onClick={changeAsideValue}></i> : <NavLinks>
                   <Link to="/Cien-dias-renovacion-popular/pensamiento-del-partido">Pensamiento del partido</Link>
                   <Link to="/Cien-dias-renovacion-popular/los-4-ejes-del-plan">Los 4 ejes fundamentales</Link>
               </NavLinks>
           }
        </nav>
       {
           Aside ? <aside>
              <NavLinks style={{flexDirection:"column"}}>
              <Link to="/Cien-dias-renovacion-popular/" onClick={changeAsideValue}>
               Plan de 100 días
               </Link>
              <Link to="/Cien-dias-renovacion-popular/pensamiento-del-partido" onClick={changeAsideValue}>
               Pensamiento del partido
               </Link>
               <Link to="/Cien-dias-renovacion-popular/los-4-ejes-del-plan" onClick={changeAsideValue}>
               Los 4 ejes fundamentales
               </Link>
              </NavLinks>
           </aside> : null 
       }
      </>
    )
}

export default NavBarContainer
