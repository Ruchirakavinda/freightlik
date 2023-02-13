import React from 'react';
import logo1 from '../../../Assets/logo01.png';
import userIcon from '../../../Assets/user.png';
import './NavBar.css';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarLink,
  MDBIcon
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { UserAuth } from '../../../Context/AuthContext';

export default function NavBar() {
  const { user, logOut} = UserAuth();
  const handleLogout = async () =>{
    try {
      await logOut();
      console.log('You are Logged Out !')
      window.location.pathname='/';
    } catch (e) {
      console.log(e.message);      
    }
  }
  return (
    <MDBNavbar expand='lg' light  className='navBarMain'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/Home'><img src={logo1} alt='...' className='logoOne'/>
        {window.location.pathname === '/Home'?
        <MDBNavbarLink  aria-current='page' href='#' style={{width:'0px'}}>
          <MDBIcon fas icon="bullhorn" className='announceIcon' />
          <span className='navCont'>Join our Affiliate Program and earn a minimum of $500 per referral. </span>
          <Link  to ='#' className='learnMore'> Learn More</Link>
          </MDBNavbarLink>
          :<></>
          }
          </MDBNavbarBrand>
              <MDBNavbarLink  style={{width:'1000px',textAlign:'right'}} className='navCont'>{user && user.email} </MDBNavbarLink>
          <span>
            <img src={userIcon} alt='...' className='profileIcon'/>
          </span>
          <span><MDBIcon fas icon="chevron-down" className='navDownArrowIcon' /> </span>
      </MDBContainer>
      <div className='logoutBtn' onClick={handleLogout}>Log Out</div>
    </MDBNavbar>
  );
}