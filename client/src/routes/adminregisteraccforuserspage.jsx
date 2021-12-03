import './adminregisteraccforuser.css'
import React from 'react';
import { useState } from 'react';
//import from antd
import { Layout, Menu , Breadcrumb, Table} from 'antd/lib';
import { DatePicker } from 'antd';
import {LogoutOutlined, MenuFoldOutlined } from '@ant-design/icons';

//import from FontAwesome
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { faHome, faList,faBell , faUserFriends} from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';



import SubMenu from 'antd/lib/menu/SubMenu';

const { Header, Content, Sider } = Layout;
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];
export default function AdminRegisterAccForUserPage(){
return(
    
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
             <FontAwesomeIcon icon={faList} />  Danh sách bài viết
             </Menu.Item>
                  
              
          </SubMenu >

          <Menu.Item key="4" >
             <LogoutOutlined    />  Đăng xuất
          </Menu.Item>
        </Menu>
        
          
      </Sider>
      
      <Layout>
        <Header>
          <MenuFoldOutlined />
          <div class = "user-image_in_header">
              <img src = "https://dxclan.com:5000/upload/avatars/user.png"></img>
          </div>
          <div className="globe"> <img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Globe_icon.svg" alt="" /></div>
        </Header>
        <div className="breadcrumb">
        <Breadcrumb>
            <Breadcrumb.Item>
              <a href="registeraccforuser">Trang chủ</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Quản lý người dùng</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Danh sách người dùng</a>
            </Breadcrumb.Item>
        </Breadcrumb>
        </div>
        <Content
            className="site-layout-background"
            style={{
              margin: '25px 100px',
              padding: 24,
              minHeight: '100vh',
            }}
          >
              <DatePicker />
              <Table dataSource={dataSource} columns={columns} />;
                
            
        </Content>
        
      </Layout>
    </Layout>
  
)
}