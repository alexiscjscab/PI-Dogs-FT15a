import {Route} from 'react-router-dom';
import {Fragment} from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';

function App() {
  return (
    <Fragment>
      <Route exact path= '/' component = {LandingPage}/>

      <Route path={['/home']}>
        <NavBar/>
      </Route>

      <Route path = '/home' component={Home} />

    </Fragment>
  );
}

export default App;
