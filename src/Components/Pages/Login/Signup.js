import React, {useState } from 'react';
import './Login.css';
import {
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBContainer
} from 'mdb-react-ui-kit';
import logo1 from '../../../Assets/logo01.png';
import { UserAuth } from '../../../Context/AuthContext';
import { useTranslation } from 'react-i18next';

function Signup() {
    const { t, i18n } = useTranslation();
    function handleLanguage(lang){
    i18n.changeLanguage(lang);
  }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')

    const {createUser} = UserAuth()


    const handleSignUp = async (e) => {
        e.preventDefault()
        try {
            await createUser(email, password);
            window.location.pathname='/Home';
        } catch (e) {
            console.log(e.message)
            setMsg(e.message)
            
        }
    }

  return (
    <MDBContainer fluid className='loginMain'>
      <MDBContainer className='loginDivOne'>
        <img src={logo1} alt='...' className='loginLogoOne'/>
        <MDBIcon fab icon="linkedin" className='loginLinkedIcon'/>
        <span className='langMain'>
        <span className='langBtn' onClick={() => handleLanguage('en')}>English</span>
        <MDBIcon fas icon="globe" className='langIcon'/>
        <span className='langBtn' onClick={() => handleLanguage('ko')}>Korean</span>
        </span>
      </MDBContainer>
    <MDBContainer className='loginFormMain'>
    <form onSubmit={handleSignUp}>
      <p className='loginTopic'>{t('signup')}</p>
      <p style={{color:'brown'}}>{msg==='Firebase: Error (auth/email-already-in-use).'?t('signinError'):''}</p>
      <input className='mb-4 loginInput' type='email' onChange={(e) => setEmail(e.target.value)} placeholder={t('email')} /><br/>
      <input className='mb-4 loginInput' type='password' onChange={(e) => setPassword(e.target.value)} placeholder={t('password')} />

      <MDBBtn type='submit' className='mb-4 loginBtn' block >
      {t('signup')}
      </MDBBtn>

      <div className='text-center'>
      <p className='loginCont'>
      {t('haveAccount')} <span className='learnMore' onClick={() =>  window.location.href='/'}>{t('login')}</span>
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
export default Signup;