// import axios from "axios";

import { Component } from "react";
import "../styles/MyCarousel.css";
class MyCarousel extends Component {
  state = {
    vip: [],
    binance: [],
    recovery: [],
  };

  //  async componentDidMount(){
  //   const vipData = await axios.get('http://127.0.0.1:5500/api/data/vip')
  //   this.setState({vip:vipData})
  //   const binance = await axios.get('http://127.0.0.1:5500/api/data/vip')
  //   this.setState({binance:binance})
  //   const recovery = await axios.get('http://127.0.0.1:5500/api/data/vip')
  //   this.setState({recovery:recovery})
  // }
  render() {


    function btnClick(e) {
      const buttons = document.querySelectorAll(".card-buttons button");
      buttons.forEach((btn) => {
        btn.classList = "";
      });
      e.target.classList = "is-active";
      // e.target.id

     
      
      let about = document.getElementById('about')
      let exp = document.getElementById('exp')
      let contact = document.getElementById('contact')

      if(e.target.id === '1'){
        exp.style.display = 'none'
        contact.style.display = 'none'
        about.style.display ='block'
      }
      if(e.target.id === '2'){
        about.style.display = 'none'
        contact.style.display = 'none'
        exp.style.display ='block'
      }
      if(e.target.id === '3'){
        about.style.display = 'none'
        contact.style.display = 'block'
        exp.style.display ='none'
      }
   
     
    }

    return (
      <>
        <div className="cards">
          <div className="card" data-state="#about">
            <div className="card-header">
              <div
                className="card-cover"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")',
                }}
              />
              <img
                className="card-avatar"
                src={require("../img/vip4.jpeg")}
                alt="avatar"
              />
              <h1 className="card-fullname">VIP Channel</h1>
            </div>
            <div className="card-main">
              <div className="card_body">

              <div className="card-section is-active about" id='about' >
                <div className="card-content">
                  <div className="card-subtitle">250$ per Month</div>

                  <ul className="card-desc">
                    <li>Futures & Spot Signals</li>

                    <li>Airdrop Hunting</li>
                    <li>NFT</li>
                    <li>Market Analyzing</li>
                  </ul>
                </div>
                <div className="card-social">
                  <a href="#">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                      <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                      <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="card-section  experience" id='exp' >
                <div className="card-content">
                  <div className="card-subtitle">Last Month Signals</div>

                  <img src={require('../img/spot.png')} alt="" />
                  <img src={require('../img/futures.png')} alt="" />
                </div>
                
              </div>

              <div className="card-section  contact" id='contact' >
                <div className="card-content">
                  
                  <p>please send USDT(TRC20) to this Address and send screenshot to telegram Admin</p>
                  <h3 className='address'>TCt1LnhEXiShEN4dWAHbKG4uuvwA4c4iz2</h3>
                  <div>
                  <img src={require('../img/Qr.jpg')} alt="" />
                  </div>
                
                  <h6>Telegram ID : @LifetimeTraders_Admin</h6>
                 
                </div>
                
              </div>

              </div>

              <div className="card-buttons" onClick={btnClick}>
                <button data-section="#about" className="is-active" id='1'>
                  ABOUT
                </button>
                <button data-section="#experience" id ='2'>EXPERIENCE</button>
                <button data-section="#contact" id='3'>CONTACT</button>
              </div>
            </div>
          </div>

          <div className="card" data-state="#about" >
            <div className="card-header" >
              <div
                className="card-cover"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")',
                }}
              />
              <img
                className="card-avatar"
                src={require("../img/binance2.png")}
                alt="avatar"
              />
              <h1 className="card-fullname">Binance Verification</h1>
            </div>
            <div className="card-main">
              <div className="card_body">

              <div className="card-section is-active about" id='about' >
                <div className="card-content">
                  <div className="card-subtitle">300$ for Top Level Verification</div>

                  <ul className="card-desc">
                    <li>Verification with high quality ID</li>
                    <li>ID's from any country you Want</li>
                    <li>Estimating time for verification is 1 Week</li>
                    <li>For more information Contact Us</li>
                  </ul>
                </div>
               
              </div>

              <div className="card-social">
                  <a href="#">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                      <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                      <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
                    </svg>
                  </a>
                </div>

              <div className="card-section  experience" id='exp' >
                <div className="card-content">
                  <div className="card-subtitle">Last Month Signals</div>

                  <img src={require('../img/spot.png')} alt="" />
                  <img src={require('../img/futures.png')} alt="" />
                </div>
                
              </div>

              <div className="card-section  contact" id='contact' >
                <div className="card-content">
                  
                  <p>please send USDT(TRC20) to this Address and send screenshot to telegram Admin</p>
                  <h3 className='address'>TCt1LnhEXiShEN4dWAHbKG4uuvwA4c4iz2</h3>
                  <div>
                  <img src={require('../img/Qr.jpg')} alt="" />
                  </div>
                
                  <h6>Telegram ID : @LifetimeTraders_Admin</h6>
                 
                </div>
                
              </div>

              </div>

              
            </div>
          </div>


          <div className="card" data-state="#about">
            <div className="card-header">
              <div
                className="card-cover"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")',
                }}
              />
              <img
                className="card-avatar"
                src={require("../img/assets.jpg")}
                alt="avatar"
              />
              <h1 className="card-fullname">Assets Recovery</h1>
            </div>
            <div className="card-main">
              <div className="card_body">

              <div className="card-section is-active about" id='about' >
                <div className="card-content">
                  <div className="card-subtitle">30% of Assets after recovery</div>

                  <ul className="card-desc">
                    <li>High confidential</li>
                    <li>destination should be your Own Wallet</li>
                    <li>Wrong network or stuck assets in network</li>
                    <li>For more information Contact Us</li>
                  </ul>
                </div>
               
              </div>

              <div className="card-social">
                  <a href="#">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M301 256c0 24.852-20.148 45-45 45s-45-20.148-45-45 20.148-45 45-45 45 20.148 45 45zm0 0" />
                      <path d="M332 120H180c-33.086 0-60 26.914-60 60v152c0 33.086 26.914 60 60 60h152c33.086 0 60-26.914 60-60V180c0-33.086-26.914-60-60-60zm-76 211c-41.355 0-75-33.645-75-75s33.645-75 75-75 75 33.645 75 75-33.645 75-75 75zm86-146c-8.285 0-15-6.715-15-15s6.715-15 15-15 15 6.715 15 15-6.715 15-15 15zm0 0" />
                      <path d="M377 0H135C60.562 0 0 60.563 0 135v242c0 74.438 60.563 135 135 135h242c74.438 0 135-60.563 135-135V135C512 60.562 451.437 0 377 0zm45 332c0 49.625-40.375 90-90 90H180c-49.625 0-90-40.375-90-90V180c0-49.625 40.375-90 90-90h152c49.625 0 90 40.375 90 90zm0 0" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z" />
                    </svg>
                  </a>
                </div>

              <div className="card-section  experience" id='exp' >
                <div className="card-content">
                  <div className="card-subtitle">Last Month Signals</div>

                  <img src={require('../img/spot.png')} alt="" />
                  <img src={require('../img/futures.png')} alt="" />
                </div>
                
              </div>

              <div className="card-section  contact" id='contact' >
                <div className="card-content">
                  
                  <p>please send USDT(TRC20) to this Address and send screenshot to telegram Admin</p>
                  <h3 className='address'>TCt1LnhEXiShEN4dWAHbKG4uuvwA4c4iz2</h3>
                  <div>
                  <img src={require('../img/Qr.jpg')} alt="" />
                  </div>
                
                  <h6>Telegram ID : @LifetimeTraders_Admin</h6>
                 
                </div>
                
              </div>

              </div>

              
            </div>
          </div>



          
        </div>
      </>
    );
  }
}

export default MyCarousel;
