
import { Layout, Menu , Breadcrumb} from 'antd/lib';



import React from 'react';
import './adminregisteraccforuser.css'
import { useState } from 'react';
import { DatePicker } from 'antd';
import {LogoutOutlined} from '@ant-design/icons';
  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

const { Header, Content, Sider } = Layout;

export default function AdminRegisterAccForUserPage(){
return(
    <>
    <Layout>
      <Sider>
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" >
             <FontAwesomeIcon icon={faHome} />  Trang chủ 
          </Menu.Item>

          <Menu.Item key="2" >
              <FontAwesomeIcon icon={faUserFriends} />  Quản lý người dùng
          </Menu.Item>

          <Menu.Item key="3" >
             <FontAwesomeIcon icon={faNewspaper} />  Quản lý bài viết
          </Menu.Item>

          <Menu.Item key="4" >
             <LogoutOutlined />  Đăng xuất
          </Menu.Item>
        </Menu>
        
          
      </Sider>
      <Layout>
        <Header>
          <div class = "user-image_in_header">
              <img src = "https://dxclan.com:5000/upload/avatars/user.png"></img>
          </div>
        </Header>
        <Breadcrumb>
            <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Quản lý người dùng</a>
            </Breadcrumb.Item>
            
      </Breadcrumb>,
        <Content
            className="site-layout-background"
            style={{
              margin: '25px 100px',
              padding: 24,
              minHeight: '100vh',
            }}
          >
              <DatePicker />
                
            Content
        </Content>
        
      </Layout>
    </Layout>
  </>
)
}