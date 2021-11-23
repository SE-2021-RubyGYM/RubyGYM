import './style.css'
import { useState } from 'react';


function Header() {

  const [state, setState] = useState('none')

  const showLoginPanel = () => {
    setState((state) => {
      if (state == 'none'){
        return 'block'
      }
      else {
        return 'none'
      }
    })
  }

  const closeLoginPanel = () => {
    setState((state) => {
      if (state == 'block'){
        return 'none'
      }
      else {
        return 'block'
      }
    })
  }

  return (                                  
    
    <div id="html">

      {/* Phần header  */}
      <div id="header">
        <div className="logo-page">
          <a href="/">
            <img 
              src="https://lh3.googleusercontent.com/d/1TR8uxHUpxSpM6NeGLU-Tz_2LswOLN2eH=s220?authuser=0"
              className="logo"
              />
          </a>
        </div>

        <div className = "nav-menu">
          <a href= "" >
            Tin tức - dịch vụ
          </a>
        </div>

        
        <div className = "nav-menu-login">
          Đăng nhập
          <ul className="login-menu">
            <li className="login-user">
              <button onClick={showLoginPanel} >User</button>
            </li>
            <li className="login-user">
              <a href="/admin/home" >
                <button  >Admin</button>
              </a>
            </li>

          </ul>
          
        </div>

      </div>
      
      {/* Panel Login */}
      <div class="login-panel" style={{display: state}}>
        <h2>Ruby Gym</h2>
        <br />
        <input type="text" placeholder="Enter user" />
        <input type="password" placeholder="Enter password" />
        <div className="check">
          <label >    
            <input  type="checkbox" />
            Remember me
            </label>
        </div>
        <br />
        <button className="submit-login">
          Log in
        </button>
        <button className="close-panel" onClick={closeLoginPanel} > 
          Đóng 
        </button>          
      </div>
      
    </div>           
  );
}
export default Header;