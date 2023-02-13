import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Common/NavBar/NavBar';
import SideNav from './Components/Common/SideNavBar/SideNavBar';
import Login from './Components/Pages/Login/Login';
import Users from './Components/Pages/Users/Users';
import Home from './Components/Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        {window.location.pathname === '/'?<></>:<Navbar/> }
        

          <Route path='/' exact>
            <Login/>
          </Route>
          
          <div className='paddingLeft'>

          {window.location.pathname === '/'?<></>:<SideNav/>}

            <Route path='/Home'>
              <Home/>
            </Route>

            <Route path='/Users'>
              <Users/>
            </Route>

          </div>
          
      </Router>
     
    </div>
  );
}

export default App;
