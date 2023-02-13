import React from 'react';
import './Login.css';
import {
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBContainer
} from 'mdb-react-ui-kit';
import logo1 from '../../../Assets/logo01.png';

function Login() {
  return (
    <MDBContainer fluid className='loginMain'>
      <MDBContainer className='loginDivOne'>
        <img src={logo1} alt='...' className='loginLogoOne'/>
        <MDBIcon fab icon="linkedin" className='loginLinkedIcon'/>
      </MDBContainer>
    <MDBContainer className='loginFormMain'>
    <form>
      <p className='loginTopic'>Log In</p>
      <input className='mb-4 loginInput' type='email' id='form2Example1' placeholder='Email address' /><br/>
      <input className='mb-4 loginInput' type='password' id='form2Example2' placeholder='Password' />

      <MDBRow className='mb-4'>
        <MDBCol className='d-flex justify-content-center'>
          <MDBCheckbox id='form2Example3'  defaultChecked /><span className='loginCont'>Remember Me</span>
        </MDBCol>
        <MDBCol>
          <span className='loginCont'>Forgot password ?</span>
        </MDBCol>
      </MDBRow>

      <MDBBtn type='submit' className='mb-4 loginBtn' block href='/Home'>
        Log In
      </MDBBtn>

      <div className='text-center'>
        <p className='loginCont'>
          Not a member ? <span className='learnMore'>Register</span>
        </p>
        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='google' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1' >
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </div>
    </form>
    </MDBContainer>
    <MDBContainer>
    <MDBRow className='row-cols-1 row-cols-md-5 '>

        <MDBCol><img src={logo1} className='loginDownLogo' alt='...'/></MDBCol>
        
        <MDBCol><img src={logo1} className='loginDownLogo' alt='...'/></MDBCol>
        
        <MDBCol><img src={logo1} className='loginDownLogo' alt='...'/></MDBCol>
        
        <MDBCol><img src={logo1} className='loginDownLogo' alt='...'/></MDBCol>

        <MDBCol><img src={logo1} className='loginDownLogo' alt='...'/></MDBCol>
        
      </MDBRow>
    </MDBContainer>
    </MDBContainer>
  );
}
export default Login;