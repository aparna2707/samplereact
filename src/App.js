
import './App.css';
import Register from './Register'
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import Loginfunctional from './Loginfunctional';
import {BrowserRouter, Switch, Route,Link} from 'react-router-dom';/**onnil kooduthal imports same import statementil
undenkil {}ullil venam kodukkan */
import Dashboard from './Dashboard';


function App() {

  return (
    <BrowserRouter>
{/* <Link to="/Register">Register</Link><br></br>

<Link to="/Dashboard">Dashboard</Link><br></br>

<Link to="/">login</Link> */}
    <div className="App">
    
      <Switch>
      <Route path="/dashboard"  component={Dashboard}>
            <Dashboard></Dashboard>
        </Route>
      {/* <Route path="/Register"   component={Register}>
           <Register></Register>
        </Route> */}
 <Route path='/' exact  component={Login}>{/**.props.history kittanamenkil ivide component venam */}
            <Login></Login>
        </Route>
      </Switch>
     {/* <Loginfunctional></Loginfunctional>  */}
    </div>
    </BrowserRouter>
  );
}

export default App;
