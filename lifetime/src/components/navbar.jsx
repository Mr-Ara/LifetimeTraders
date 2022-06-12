import { Component } from "react";
import '../styles/navbar.css'


class NavBar extends Component {


  render() {
    
    return (
      <>
        <div className='navbar'>
          <div className='login'>
            <button onClick = {this.buttonHandller} class="button-86" role="button">
              Login
            </button>
          </div>
          <div className='left-options'>
            <span id='vip'>VIP</span>
            <span id='recovery'>Recovery Assets</span>
            <span id='binance'>Binance Verification</span>
          </div>
          <div className='logo'>
          <h1>LifeTime Traders</h1>
          <img src={require('../img/loggree.png')} alt='Logo' />
          
          </div>
          <div className='right-options'>
            <span id='Contact'>Contact</span>
            <span id='FreeSignal'>Free Signal</span>
            <span id='Market'>Market</span>
          </div>
          
          
          {/* <div className='basket'>
            <button onClick = {this.buttonHandller}>
              {} items
            </button>
          </div> */}
         
        </div>
      </>
    );

   
  }

  buttonHandller = (e)=>{
      e.preventDefault()
  }
}

export default NavBar;
