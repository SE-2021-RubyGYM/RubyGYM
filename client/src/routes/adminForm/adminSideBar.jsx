import "./adminForm.css";
import React from 'react';
import { useState } from 'react';
//import from antd
import { Layout, Menu } from 'antd/lib';
//import from FontAwesome
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faList,faBell , faUserFriends} from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import SubMenu from 'antd/lib/menu/SubMenu';

const { Sider} = Layout;

export default function AdminSideBar(){
return(
  
      <div className="sidebar" style={{position:"absolute", top:"0px"}}>
      <Layout>
      <Sider >
        <div className="logo">
          <img src="https://lh3.googleusercontent.com/d/1TR8uxHUpxSpM6NeGLU-Tz_2LswOLN2eH=s220?authuser=0" alt="" />
        </div>

        <div className="userPanel">
          <div class = "user-image">
              <img src = "https://dxclan.com:5000/upload/avatars/user.png" class = "user-image"/>
          </div>
          <div class = "user-info">
              <p class= "user-name"> Nguyễn Văn Đạt </p>
              <p class= "user-online"> Online</p>
              <p class= "user-noti"><FontAwesomeIcon icon={faBell} />Thông báo</p>
          </div>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['home']}>
          <Menu.Item key="home" icon ={<FontAwesomeIcon icon={faHome} />}>
              Trang chủ
          </Menu.Item>
          <SubMenu key ="sub1" icon={<FontAwesomeIcon icon={faUserFriends} />} title="Quản lý người dùng ">
             <Menu.Item  key ="1" >
             <FontAwesomeIcon icon={faList} />  Danh sách người dùng  
             </Menu.Item>
                  
              
          </SubMenu >
          <SubMenu key ="sub2" icon={<FontAwesomeIcon icon={faNewspaper} />} title="Quản lý bài viết ">
             <Menu.Item  key ="2" >
              <a href="addblog">  <FontAwesomeIcon icon={faList} />  Danh sách bài viết </a>
             </Menu.Item>     
          </SubMenu >

          <Menu.Item key="4" >
           < FontAwesomeIcon icon={faSignOutAlt}   />     Đăng xuất
          </Menu.Item>
        </Menu>
      </Sider>
      </Layout>
      </div>
    
  
)
}