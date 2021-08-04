import {Route} from 'react-router-dom';
import {Fragment} from 'react';
import LandingPage from './components/LandingPage/LandingPage';



function App() {
  return (
    <Fragment>
      <Route exact path= '/' component = {LandingPage}/>
    </Fragment>
  );
}

export default App;
