import {MDBIcon } from 'mdb-react-ui-kit';
import React from 'react';
import './SideNavBar.css';

function SideNav() {
  return (
    <>
    <div className='sideNavMain'>
    {window.location.pathname === '/Home'?<div className='sideNavContMain'>
        <MDBIcon far icon="user-circle" className='sideNavIcon'/><span className='sideNavCont'>My Profile</span>
      </div> :<></>}

      <div className='sideNavContMain'>
      <MDBIcon fas icon="tachometer-alt" className='sideNavIcon'/><span className='sideNavCont'>Dashboard</span>
      </div>

      {window.location.pathname === '/Users'?<div className='sideNavContMain' onClick={() =>  window.location.href='/Home'}>
      <MDBIcon fas icon="globe" className='sideNavIcon'/><span className='sideNavCont'>Home Page</span>
      </div>:<></> }

      {window.location.pathname === '/Users'?<div className='sideNavContMain'>
      <MDBIcon fas icon="building" className='sideNavIcon'/><span className='sideNavCont'>Companies</span>
      </div>:<></> }

      {window.location.pathname === '/Home'?<div className='sideNavContMain' onClick={() =>  window.location.href='/Users'}>
      <MDBIcon fas icon="users"  className='sideNavIcon'/><span className='sideNavCont'>Users</span>
      </div>:<></> }

      <div className='sideNavContMain'>
      <MDBIcon fas icon="download" className='sideNavIcon'/><span className='sideNavCont'>Downloads</span>
      </div>

      {window.location.pathname === '/Users'? <div className='sideNavContMain'>
      <MDBIcon fas icon="cog" className='sideNavIcon'/><span className='sideNavCont'>Settings</span>
      </div>:<></> }

      {window.location.pathname === '/Users'?<div className='sideNavContMain'>
      <MDBIcon fas icon="mail-bulk" className='sideNavIcon'/><span className='sideNavCont'>Subscribers</span>
      </div>:<></> }

      {window.location.pathname === '/Users'?<div className='sideNavContMain'>
      <MDBIcon fab icon="linkedin" className='sideNavIcon'/><span className='sideNavCont'>Socail Media</span>
      </div>:<></> }

      {window.location.pathname === '/Users'?<div className='sideNavContMain'>
      <MDBIcon fas icon="user-shield" className='sideNavIcon'/><span className='sideNavCont'>Admin Users</span>
      </div>:<></> }

      {window.location.pathname === '/Home'?<div className='sideNavContMain'>
      <MDBIcon fas icon="window-close" className='sideNavIcon'/><span className='sideNavCont'>Departed Members</span>
      </div>:<></> }
      
      {window.location.pathname === '/Home'?<div className='sideNavContMain'>
      <MDBIcon fas icon="bullhorn" className='sideNavIcon'/><span className='sideNavCont'>Announcements</span>
      </div>:<></> }

      {window.location.pathname === '/Home'?<div className='sideNavContMain'>
      <MDBIcon fas icon="ad" className='sideNavIcon'/><span className='sideNavCont'>Need Advertising?</span>
      </div>:<></> }

      {window.location.pathname === '/Home'?<div className='sideNavContMain'>
      <MDBIcon fas icon="lightbulb" className='sideNavIcon'/><span className='sideNavCont'>Suggestion Box</span>
      </div>:<></> }

      {window.location.pathname === '/Home'?<><div className='helpBox'>
        <p className='helpBoxCont'>Need Help?</p>
        <MDBIcon fas icon="user-tie" className='helpUserIcon'/>
        <div className='helpBoxBtn'>Talk With Us</div>
       </div>

       <div className='followBox'>
        <p className='followBoxCont'>Follow Us</p>
        <MDBIcon fab icon="linkedin" className='followIcon'/>
       </div></>:<></> }

       
    </div>
    </>
  )
}

export default SideNav;