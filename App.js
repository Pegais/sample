import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route,BrowserRouter} from 'react-router-dom'
import Loginpage from './Components/Loginpage'
import Signup from './Components/Signup';
import Notifier from './Components/Notifier'
function App() {
  return (
   <Router>
       <Switch>
        <Route path='/' exact render={(prop)=>(
            <>
            <Loginpage/>
            </>
        )}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/notifier' component={Notifier}/>
         </Switch>
     
  </Router>
  );
}

export default App;
