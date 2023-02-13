import React from 'react';
import logo1 from '../../../Assets/logo01.png';
import user from '../../../Assets/user.png';
import './NavBar.css';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarLink,
  MDBIcon
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <MDBNavbar expand='lg' light  className='navBarMain'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/Home'><img src={logo1} alt='...' className='logoOne'/>
        {window.location.pathname === '/Home'?
        <MDBNavbarLink  aria-current='page' href='#'>
          <MDBIcon fas icon="bullhorn" className='announceIcon' />
          <span className='navCont'>Join our Affiliate Program and earn a minimum of $500 per referral. </span>
          <Link  to ='#' className='learnMore'> Learn More</Link>
          </MDBNavbarLink>
          :<></>
          }
          </MDBNavbarBrand>
              <MDBNavbarLink  style={{width:'500px'}} className='navCont'>Welcome Brian !</MDBNavbarLink>
          <span className='navbar-text' onClick={() =>  window.location.href='/'}>
            <img src={user} alt='...' className='profileIcon'/>
          </span>
          <span><MDBIcon fas icon="chevron-down" className='navDownArrowIcon' /> </span>
      </MDBContainer>
    </MDBNavbar>
  );
}