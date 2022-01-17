import './style.css'
import axios from 'axios';
import { useState } from 'react';
import Header from './header.jsx'

function Coach() {
  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
  
  const fLogin=async ()=>{ 
    axios({
      method: 'post',
      url: 'http://localhost:5000/api/admins/login',
      data: {
        username:userName ,
        password: password,
      }
    }).then(res=>{
      if(res.status==200){
        localStorage.setItem("accessToken",res.data.result)
        window.open('http://localhost:3000/admin/registeraccforuser','_selft')
      }
    }).catch(err => {
      alert("Tài khoản hoặc mật khẩu không chính xác!")
    });
  }

  const [state, setState] = useState('block')

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
      <Header />
      <div class="login-panel" style={{display: state}} >
        <h2>Coach</h2>
        <br/>
        <input type="text" placeholder="Enter user" onChange={(e)=>setUserName(e.target.value)} />
        <input type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} />
        <div className="check">
          <label >    
            <input  type="checkbox" />
            Remember me
            </label>
        </div>
        <br />
        <button className="submit-login" onClick={()=>fLogin()}>
          Log in
        </button>  
        <button className="close-panel" onClick={closeLoginPanel} > 
          Đóng 
        </button>      
      </div>

    </div>           
  );
}
export default Coach;