import React from 'react';
import { 
  MDBContainer,
  MDBRow,
  MDBIcon,
  MDBCol 
} from 'mdb-react-ui-kit';
import './Home.css';
import member from '../../../Assets/bl.png';
import logo2 from '../../../Assets/logo02.png';
import user from '../../../Assets/user.png';

function Home() {
  return (
    <MDBContainer className='homeMain'>

    <div className='homeTopicMain'><MDBIcon fas icon="search" className='homeTopicMainIcon'/>
      <span className='homeTopic'>Member Search</span>
    </div>
    <MDBRow className='row-cols-md-5 inputRow'>
      <MDBCol>
      <input className="SelDivOne" placeholder='Company Name' />
      </MDBCol>
      <MDBCol>
      <div className="SelDivOne">
          <select className="SelOne">
            <option value="" className="Opt_One" >
              Region
            </option>
          </select>
      </div>
      </MDBCol>
      <MDBCol>
      <div className="SelDivOne">
          <select className="SelOne">
            <option value="" className="Opt_One" >
              Country
            </option>
          </select>
      </div>
      </MDBCol>
      <MDBCol>
      <div className="SelDivOne">
          <select className="SelOne">
            <option value="" className="Opt_One" >
              Network
            </option>
          </select>
      </div>
      </MDBCol>
      <MDBCol>
      <div className='memberSearchBtn'>Search</div>
      </MDBCol>
    </MDBRow>



    <div className='searchResultMain'>
      <div className='homeTopicMain'><MDBIcon fas icon="truck" className='homeTopicMainIcon'/>
        <span className='homeTopic'>MRL Global Logistics</span> 
        <span className='activeMember'>Active Member</span>
      </div>

      <MDBRow>
        <MDBCol size='4' className='memberCol'><img src={member} alt='...' className='memberImg' /></MDBCol>
        <MDBCol size='8' className='memberCol'>
          <table>
            
          <tbody>
            <tr>
              <th scope='row' className='memberTableHead'>Address : </th>
              <td className='memberTableData'>68 Circular Rd, Singapore 049422</td>
            </tr>
            <tr>
              <th scope='row' className='memberTableHead'>Website : </th>
              <td className='memberTableData'>www.freightise.com</td>
            </tr>
            <tr>
              <th scope='row' className='memberTableHead'>Enrollment Date : </th>
              <td className='memberTableData'>1 January 2021</td>
            </tr>
            <tr>
              <th scope='row' className='memberTableHead'>Expiry Date : </th>
              <td className='memberTableData'>1 January 2022</td>
            </tr>
            </tbody>
          </table>
        </MDBCol>
      </MDBRow>
    </div>



    <div className='searchResultMain'>
      <div className='homeTopicMain'><MDBIcon fas icon="network-wired" className='homeTopicMainIcon'/>
        <span className='homeTopic'>Networks</span> 
      </div>

      <MDBRow className='row-cols-md-5 '>

        <MDBCol><img src={logo2} className='loginDownLogo' alt='...'/></MDBCol>
        
        <MDBCol><img src={logo2} className='loginDownLogo' alt='...'/></MDBCol>
        
        <MDBCol><img src={logo2} className='loginDownLogo' alt='...' style={{opacity:'0.3'}}/></MDBCol>
        
        <MDBCol><img src={logo2} className='loginDownLogo' alt='...' style={{opacity:'0.3'}}/></MDBCol>

        <MDBCol><img src={logo2} className='loginDownLogo' alt='...' style={{opacity:'0.3'}}/></MDBCol>
        
      </MDBRow>
    </div>

    <div className='searchResultMain'>
      <div className='homeTopicMain'><MDBIcon fas icon="building" className='homeTopicMainIcon'/>
        <span className='homeTopic'>Company Profile</span> 
      </div>
    <p className='companyCont'>
    Lorem ipsum dolor sit amet. In necessitatibus repellat quo Quis placeat non obcaecati exercitationem quo ipsa
    voluptatum. Et fuga officiis qui itaque cumque aut similique impedit cum voluptas laboriosam ex quos dolorum. Lorem
    ipsum dolor sit amet. In necessitatibus repellat quo Quis placeat non obcaecati exercitationem quo ipsa voluptatum.
    Lorem ipsum dolor sit amet. In necessitatibus repellat quo Quis placeat non obcaecati exercitationem quo ipsa
    voluptatum. Et fuga officiis qui itaque cumque aut similique impedit cum voluptas laboriosam ex quos dolorum.
    </p>
    <p className='companyCont'>
    Lorem ipsum dolor sit amet. In necessitatibus repellat quo Quis placeat non obcaecati exercitationem quo ipsa
    voluptatum. Et fuga officiis qui itaque cumque aut similique impedit cum voluptas laboriosam ex quos dolorum. Lorem
    ipsum dolor sit amet. 
    </p>
    <p className='companyCont'>
    Lorem ipsum dolor sit amet. In necessitatibus repellat quo Quis placeat non obcaecati exercitationem quo ipsa
    voluptatum. Et fuga officiis qui itaque cumque aut similique impedit cum voluptas laboriosam ex quos dolorum. Lorem
    ipsum dolor sit amet. In necessitatibus repellat quo Quis placeat non obcaecati exercitationem quo ipsa voluptatum.
    Lorem ipsum dolor sit amet. In necessitatibus repellat quo Quis placeat non obcaecati exercitationem quo ipsa
    voluptatum.
    </p>
    </div>

    <div className='searchResultMain'>
    <MDBRow className='row-cols-md-2 '>

      <MDBCol>
        <div className='userCrd'>
        <MDBRow >
          <MDBCol size='4'>
            <img src={user} alt='...' className='userCrdImg'/>
          </MDBCol>
          <MDBCol size='8'>
            <h5 className='userCrdTopic'>Michael Sephton-Poultney</h5>
            <p className='userCrdPos'>Managing Director</p>

            <table>
            <tbody>
              <tr>
                <td><MDBIcon fas icon="envelope" className='userCrdIcon'/></td>
                <td className='userCrdCont'>michael@freightlinknetworks.com</td>
              </tr>
              <tr>
                <td><MDBIcon fas icon="phone-square-alt" className='userCrdIcon' /></td>
                <td className='userCrdCont'>+27 83 649 1037</td>
              </tr>
              </tbody>
            </table>
          </MDBCol>          
        </MDBRow>
        </div>
      </MDBCol>

      <MDBCol>
        <div className='userCrd'>
        <MDBRow >
          <MDBCol size='4'>
            <img src={user} alt='...' className='userCrdImg'/>
          </MDBCol>
          <MDBCol size='8'>
            <h5 className='userCrdTopic'>Michael Sephton-Poultney</h5>
            <p className='userCrdPos'>Managing Director</p>

            <table>
            <tbody>
              <tr>
                <td><MDBIcon fas icon="envelope" className='userCrdIcon'/></td>
                <td className='userCrdCont'>michael@freightlinknetworks.com</td>
              </tr>
              <tr>
                <td><MDBIcon fas icon="phone-square-alt" className='userCrdIcon' /></td>
                <td className='userCrdCont'>+27 83 649 1037</td>
              </tr>
              </tbody>
            </table>
          </MDBCol>          
        </MDBRow>
        </div>
      </MDBCol>

      <MDBCol>
        <div className='userCrd'>
        <MDBRow >
          <MDBCol size='4'>
            <img src={user} alt='...' className='userCrdImg'/>
          </MDBCol>
          <MDBCol size='8'>
            <h5 className='userCrdTopic'>Michael Sephton-Poultney</h5>
            <p className='userCrdPos'>Managing Director</p>

            <table>
            <tbody>
              <tr>
                <td><MDBIcon fas icon="envelope" className='userCrdIcon'/></td>
                <td className='userCrdCont'>michael@freightlinknetworks.com</td>
              </tr>
              <tr>
                <td><MDBIcon fas icon="phone-square-alt" className='userCrdIcon' /></td>
                <td className='userCrdCont'>+27 83 649 1037</td>
              </tr>
              </tbody>
            </table>
          </MDBCol>          
        </MDBRow>
        </div>
      </MDBCol>

      <MDBCol>
        <div className='userCrd'>
        <MDBRow >
          <MDBCol size='4'>
            <img src={user} alt='...' className='userCrdImg'/>
          </MDBCol>
          <MDBCol size='8'>
            <h5 className='userCrdTopic'>Michael Sephton-Poultney</h5>
            <p className='userCrdPos'>Managing Director</p>

            <table>
            <tbody>
              <tr>
                <td><MDBIcon fas icon="envelope" className='userCrdIcon'/></td>
                <td className='userCrdCont'>michael@freightlinknetworks.com</td>
              </tr>
              <tr>
                <td><MDBIcon fas icon="phone-square-alt" className='userCrdIcon' /></td>
                <td className='userCrdCont'>+27 83 649 1037</td>
              </tr>
              </tbody>
            </table>
          </MDBCol>          
        </MDBRow>
        </div>
      </MDBCol>

    </MDBRow>
    </div>
    </MDBContainer>
  );
}
export default Home;