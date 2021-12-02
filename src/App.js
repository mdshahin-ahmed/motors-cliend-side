import './App.css';
import Home from './Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Explore from './Pages/Explore/Explore';
import OrderPlace from './Pages/OrderPlace/OrderPlace';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/register'>
            <Register></Register>
          </Route>
          <Route path='/explore'>
            <Explore></Explore>
          </Route>
          <Route path='/orderPlace'>
           <OrderPlace></OrderPlace>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
