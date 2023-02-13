import React from 'react';
import { MDBContainer,MDBIcon,MDBRow,MDBCol,MDBAccordion,MDBAccordionItem} from 'mdb-react-ui-kit';
import './User.css';
import user from '../../../Assets/user.png';
import user2 from '../../../Assets/user2.png';
import user3 from '../../../Assets/user3.png';

function Users() {
  return (
    <>
    <MDBContainer className='userMain'>

      <div className='searchUserMain'>
        <div className='homeTopicMain'><MDBIcon fas icon="user-friends" className='homeTopicMainIcon'/>
          <span className='homeTopic'>Users</span>
        </div>
          <MDBRow className='inputRowTwo'>

          <MDBCol size='3'>
          <input className="SelDivOne" placeholder='User Name'/>
          </MDBCol>

          <MDBCol size='3'>
          <div className="SelDivOne">
              <select className="SelOne">
                <option value="volvo" className="Opt_One" >
                  Country
                </option>
              </select>
          </div>
          </MDBCol>

          <MDBCol size='3'>
          <div className="SelDivOne">
              <select className="SelOne">
                <option value="volvo" className="Opt_One" >
                  City
                </option>
              </select>
          </div>
          </MDBCol>
          
          <MDBCol size='1'>
          <div className='userInputBtn'>Search</div>
          </MDBCol>
          <MDBCol size='1'>
          <div className='userInputBtnTwo'>Add</div>
          </MDBCol>
          <MDBCol size='1'>
          <div className='userInputBtnTwo'>Export</div>
          </MDBCol>
        </MDBRow>
      </div>

    <MDBAccordion borderless initialActive={1}>
      <div className="userCollapseMain">
        <MDBAccordionItem collapseId={1} headerTitle='Michael Sephton-Poultney'>
          <form>
          <MDBRow style={{marginLeft:'40px'}}>
            <MDBCol size='2' className='text-center' style={{marginRight:'50px'}}>
              <img src={user} alt='...' className='collapseUseImg'/>
              <p className='changeImgText'>Change Picture</p>
              <button className='saveBtn'>Save Changes</button>
            </MDBCol>
            <MDBCol size='4'>
              <table>
                <tbody>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Full Name : </td>
                    <td className='collapseTableData'><input className="SelDivOne" placeholder='Michael Sephton-Poultney'/></td>
                  </tr>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Title : </td>
                    <td className='collapseTableData'><input className="SelDivOne" placeholder='Managing Director'/></td>
                  </tr>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Email : </td>
                    <td className='collapseTableData'><input className="SelDivOne" placeholder='michael@freightlink.com'/></td>
                  </tr>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Mobile : </td>
                    <td className='collapseTableData'><input className="SelDivOne" placeholder='+27 82 634 1038'/></td>
                  </tr>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Username : </td>
                    <td className='collapseTableData'><input className="SelDivOne" placeholder='michael@freightlink.com'/></td>
                  </tr>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Password : </td>
                    <td className='collapseTableData'><input className="SelDivOne" placeholder='gdy342t3yfgdi2'/></td>
                  </tr>
                </tbody>
              </table>
            </MDBCol>
            <MDBCol size='4'>
            <table>
                <tbody>
                  <tr style={{position:'relative'}}>
                    <td className='collapseTableData collapseTableHead' >Linked Offices : </td>
                  </tr>
                </tbody>
              </table>
                <div className='linkedOffice'>
                    <p>Freightlink (Durban)</p>
                    <p>Freightlink (Karachi)</p>
                    <p>Freightlink (London)</p>
                    <p>Freightlink (New York)</p>
                </div>
              <table>
                <tbody>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Last Login : </td>
                    <td className='collapseTableData'><div className="lastLogin">4 th May 2021</div></td>
                  </tr>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Total Logins : </td>
                    <td className='collapseTableData'><div className="lastLogin">17</div></td>
                  </tr>
                </tbody>
              </table>
            </MDBCol>
          </MDBRow>
          </form>
        </MDBAccordionItem>
      </div>

      <div className="userCollapseMain">
        <MDBAccordionItem collapseId={2} headerTitle='Michael Sephton-Poultney'>
        <form>
          <MDBRow style={{marginLeft:'40px'}}>
            <MDBCol size='2' className='text-center' style={{marginRight:'50px'}}>
              <img src={user3} alt='...' className='collapseUseImg'/>
              <p className='changeImgText'>Change Picture</p>
              <button className='saveBtn'>Save Changes</button>
            </MDBCol>
            <MDBCol size='4'>
              <table>
                <tbody>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Full Name : </td>
                    <td className='collapseTableData'><input className="SelDivOne" placeholder='Michael Sephton-Poultney'/></td>
                  </tr>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Title : </td>
                    <td className='collapseTableData'><input className="SelDivOne" placeholder='Managing Director'/></td>
                  </tr>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Email : </td>
                    <td className='collapseTableData'><input className="SelDivOne" placeholder='michael@freightlink.com'/></td>
                  </tr>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Mobile : </td>
                    <td className='collapseTableData'><input className="SelDivOne" placeholder='+27 82 634 1038'/></td>
                  </tr>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Username : </td>
                    <td className='collapseTableData'><input className="SelDivOne" placeholder='michael@freightlink.com'/></td>
                  </tr>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Password : </td>
                    <td className='collapseTableData'><input className="SelDivOne" placeholder='gdy342t3yfgdi2'/></td>
                  </tr>
                </tbody>
              </table>
            </MDBCol>
            <MDBCol size='4'>
            <table>
                <tbody>
                  <tr style={{position:'relative'}}>
                    <td className='collapseTableData collapseTableHead' >Linked Offices : </td>
                  </tr>
                </tbody>
              </table>
                <div className='linkedOffice'>
                    <p>Freightlink (Durban)</p>
                    <p>Freightlink (Durban)</p>
                    <p>Freightlink (Durban)</p>
                    <p>Freightlink (Durban)</p>
                </div>
              <table>
                <tbody>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Last Login : </td>
                    <td className='collapseTableData'><div className="lastLogin">4 th May 2021</div></td>
                  </tr>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Total Logins : </td>
                    <td className='collapseTableData'><div className="lastLogin">17</div></td>
                  </tr>
                </tbody>
              </table>
            </MDBCol>
          </MDBRow>
          </form>
        </MDBAccordionItem>
      </div>

      <div className="userCollapseMain">
        <MDBAccordionItem collapseId={3} headerTitle='Michael Sephton-Poultney'>
        <form>
          <MDBRow style={{marginLeft:'40px'}}>
            <MDBCol size='2' className='text-center' style={{marginRight:'50px'}}>
              <img src={user2} alt='...' className='collapseUseImg'/>
              <p className='changeImgText'>Change Picture</p>
              <button className='saveBtn'>Save Changes</button>
            </MDBCol>
            <MDBCol size='4'>
              <table>
                <tbody>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Full Name : </td>
                    <td className='collapseTableData'><input className="SelDivOne" placeholder='Michael Sephton-Poultney'/></td>
                  </tr>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Title : </td>
                    <td className='collapseTableData'><input className="SelDivOne" placeholder='Managing Director'/></td>
                  </tr>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Email : </td>
                    <td className='collapseTableData'><input className="SelDivOne" placeholder='michael@freightlink.com'/></td>
                  </tr>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Mobile : </td>
                    <td className='collapseTableData'><input className="SelDivOne" placeholder='+27 82 634 1038'/></td>
                  </tr>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Username : </td>
                    <td className='collapseTableData'><input className="SelDivOne" placeholder='michael@freightlink.com'/></td>
                  </tr>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Password : </td>
                    <td className='collapseTableData'><input className="SelDivOne" placeholder='gdy342t3yfgdi2'/></td>
                  </tr>
                </tbody>
              </table>
            </MDBCol>
            <MDBCol size='5'>
            <table>
                <tbody>
                  <tr style={{position:'relative'}}>
                    <td className='collapseTableData collapseTableHead' >Linked Offices : </td>
                  </tr>
                </tbody>
              </table>
                <div className='linkedOffice'>
                    <p>Freightlink (Durban)</p>
                    <p>Freightlink (Durban)</p>
                    <p>Freightlink (Durban)</p>
                    <p>Freightlink (Durban)</p>
                </div>
              <table>
                <tbody>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Last Login : </td>
                    <td className='collapseTableData'><div className="lastLogin">4 th May 2021</div></td>
                  </tr>
                  <tr>
                    <td className='collapseTableData collapseTableHead'>Total Logins : </td>
                    <td className='collapseTableData'><div className="lastLogin">17</div></td>
                  </tr>
                </tbody>
              </table>
            </MDBCol>
          </MDBRow>
          </form>
        </MDBAccordionItem>
      </div>

      <div className="userCollapseMain">
        <MDBAccordionItem collapseId={4} headerTitle='Michael Sephton-Poultney'>
        </MDBAccordionItem>
      </div>

      <div className="userCollapseMain">
        <MDBAccordionItem collapseId={5} headerTitle='Michael Sephton-Poultney'>
        </MDBAccordionItem>
      </div>
    </MDBAccordion>

    <div className='pagenition'>
      <p>
        <span className='pagenitionLink'>Previous Page</span> | <span className='pagenitionLink'>Next Page</span>
      </p>
    </div>

    </MDBContainer>
    </>
  );
}

export default Users;