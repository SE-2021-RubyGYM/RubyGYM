import "./adminForm.css";
import React from 'react';
import { useState } from 'react';
//import from antd
import { Layout, Menu ,Breadcrumb} from 'antd/lib';

export default function AdminBreadCrumb(){
    return (
    <Layout>
    <Breadcrumb style={{margin:"0px 0px 0px 300px "}}>
        <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
        <Breadcrumb.Item>
            <a href="">Component</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item >
             <a href="">General</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Button</Breadcrumb.Item>
    </Breadcrumb>
    </Layout>
    )
}

