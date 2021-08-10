import {Route} from 'react-router-dom';
import {Fragment} from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import CreateDog from './components/CreateDog/CreateDog';

function App() {
  return (
    <Fragment>
      <Route exact path= '/' component = {LandingPage}/>


      {/* en estas rutas siempre aparecera el nav*/}
      <Route path={['/home', '/createdog']}>
        <NavBar/>
      </Route>

      

      <Route path = '/home' component={Home} />

      <Route path = '/createdog' component={CreateDog} />

    </Fragment>
  );
}

export default App;
