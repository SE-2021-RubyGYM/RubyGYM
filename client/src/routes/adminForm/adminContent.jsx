import "./adminForm.css";
import React from 'react';
import { useState } from 'react';
import {useContext} from 'react';
//import from antd
import { Layout, DatePicker} from 'antd/lib';

const {Content} =  Layout;


export default function AdminContent(){
    return (
    <div className="content" style={{margin:"0px 0px 0px 300px "}}>
    <Layout>
    <Content>
       
    </Content>
    </Layout>
    </div>
    )
}

