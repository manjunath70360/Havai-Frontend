import {Component} from 'react'
import "./index.css"

import { TiHome } from "react-icons/ti";
import { BsGrid3X3GapFill } from "react-icons/bs";

import AirportTable from '../airport';
import Editor from "../editor"


const airports = [
  { airport: 'Indira Gandhi International Airport', country: 'India', code: 'DEL', terminals: 3 },
  { airport: 'Dubai International Airport', country: 'UAE', code: 'DXB', terminals: 5 },
  { airport: 'Heathrow Airport', country: 'England', code: 'LHR', terminals: 6 },
  { airport: 'Istanbul Airport', country: 'Turkey', code: 'IST', terminals: 3 },
  { airport: 'Rajiv Gandhi International Airport', country: 'Texas', code: 'DFW', terminals: 14 }
];

class Home extends Component{
 state = {isEditActive:false, EditCode:''}

  onClickEdit = (id)=>{
    this.setState({isEditActive:true, EditCode:id})
  }

  onClickBackBtn=()=>{
    this.setState({isEditActive:false, EditCode:''})
  }

  render(){
    const {isEditActive, EditCode} = this.state
    const filteredAirports = airports.filter(eachitem => eachitem.code === EditCode);
console.log(filteredAirports)
    return(
      <div className="app-container">
        <div className="header-container">
          <h1 className="name">hava havai</h1>
          <img src="https://res.cloudinary.com/dwwunc51b/image/upload/v1720155902/account_img_fqrhnd.jpg" className="account-img" alt="account" />
        </div>
        <div className='main-container'>
        <div className='side-bar-container'>
              <div className='icon-name-con'>
              <TiHome className='icon'/>
              <h3 className='icon-name'>Home</h3>
              </div>
              <div className='icon-name-con'>
              <BsGrid3X3GapFill className='icon'/>
              <h3 className='icon-name'>Dashboard</h3>
              </div>
              <ul className='list'>
                <h2 className='side-head'>Services</h2>
                <li className='item active'>
                    Airports
                </li>
                <li className='item'>
                    Videos
                </li>
              </ul>
              <ul className='list'>
                <h2 className='side-head'>Others</h2>
                <li className='item'>
                    List 1
                </li>
                <li className='item'>
                    List 2
                </li>
                <li className='item'>
                    List 3
                </li>
              </ul>
          </div>
         <div className='content-container'>
        {
          isEditActive ? <Editor details={filteredAirports} onClickBackBtn={this.onClickBackBtn} /> : <AirportTable airports={airports} onClickEdit={this.onClickEdit}/>
        }
         </div>
        </div>
      </div>
    )
  }
}


export default Home