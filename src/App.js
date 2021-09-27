import './App.css';
import Homepage from './components/Homepage';
import Error from './components/Error';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/gear_up" component={Homepage} />
      <Route component={Error}/>
    </Switch>
    </>
  );
}

export default App;
