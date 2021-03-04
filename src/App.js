import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import {useState, useEffect} from "react"
import LoadingContainer from './Containers/NavBarContainer/Loading';
import HomeContainer from './Containers/HomeContainer/HomeContainer';
import NavBarContainer from './Containers/NavBarContainer/NavBarContainer';
import Thoughts from './Containers/Thoughts';
import Footer from './Footer';
import FourAxis from './Containers/FourAxis/FourAxis';

function App() {
  const [Loading, setLoading] = useState(false)
  useEffect(() => {
      setTimeout(() => {
         setLoading(false)
      }, 3000);
  }, [])
  return <>{
     Loading ? <LoadingContainer/> : 
     <Router>
       <NavBarContainer/>
     <Switch>
       <Route exact path='/Cien-dias-renovacion-popular/'>
         <HomeContainer/>
       </Route>
       <Route exact path="/Cien-dias-renovacion-popular/pensamiento-del-partido">
         <Thoughts/>
       </Route>
       <Route exact path="/Cien-dias-renovacion-popular/los-4-ejes-del-plan">
         <FourAxis/>
       </Route>
       <Route>
         <Redirect to="/Cien-dias-renovacion-popular/"/>
       </Route>
     </Switch>
     <Footer/>
   </Router>
   }</>
  ;
}

export default App;