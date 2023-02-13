import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Common/NavBar/NavBar';
import SideNav from './Components/Common/SideNavBar/SideNavBar';
import Login from './Components/Pages/Login/Login';
import Users from './Components/Pages/Users/Users';
import Home from './Components/Pages/Home/Home';
import Signup from './Components/Pages/Login/Signup';
import { AuthContextProvider } from './Context/AuthContext';
function App() {
 
  return (
    <AuthContextProvider>
    <div className="App">
      <Router>
        {window.location.pathname === '/' || window.location.pathname === '/Signup' ?<></>:<Navbar/> }
        

          <Route path='/' exact>
            <Login/>
          </Route>

          <Route path='/Signup' exact>
            <Signup/>
          </Route>
          
          <div className='paddingLeft'>

          {window.location.pathname === '/' || window.location.pathname === '/Signup'?<></>:<SideNav/>}

          
            <Route path='/Home'>
              <Home/>
            </Route>
            

            <Route path='/Users'>
              <Users/>
            </Route>

          </div>
          
      </Router>
     
    </div>
    </AuthContextProvider>
  );
}

export default App;
