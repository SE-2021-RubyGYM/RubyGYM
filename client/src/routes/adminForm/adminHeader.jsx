import "./adminForm.css";
import React from 'react';
import { useState } from 'react';
//import from antd
import { Layout} from 'antd/lib';

const { Header} = Layout;

export default function AdminHeader(){
return(
    
    <Layout>
      <Header>
          <div class = "user-image_in_header">
              <img src = "https://dxclan.com:5000/upload/avatars/user.png"></img>
          </div>
          <div className="globe"> <img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Globe_icon.svg" alt="" /></div>
      </Header>
    </Layout>
)
}