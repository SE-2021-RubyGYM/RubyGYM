import './style.css'
import axios from 'axios';

import { useState } from 'react';

function Admin() {
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
        window.open('')
      }
    });
  }

  return (                                  
    <div id="html">
      <div class="login-panel" >
        <h2>Admin</h2>
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
        <button onClick={()=>fLogin()}>
          Log in
        </button>        
      </div>

    </div>           
  );
}
export default Admin;