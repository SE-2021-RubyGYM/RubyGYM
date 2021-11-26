import AdminHomeHeader from "../adminhomeheader/adminhomeheader"

import { AdminContainerStyle } from "../admincontainer/admincontainerstyle"
import AdminTitleHeaderContainer from "../admintitleheadercontainer/admintitleheadercontainer"
import { AdminContainerContentStyle } from "../admincontainercontent/admincontainercontent"
import {AdminDefaultRightContainerStyle} from "../admindefaultrightcontainer/admindefaultrightcontainer"
import AdminDefaultContentSearchTool from "../admindefaultcontentsearchtools/admindefaultcontentsearchtool"
import AdminDefaultTable from "../admindefaulttable/admindefaulttable"


import axios from "axios"
import { useState,useEffect } from "react"

export default function AdminRegisterAccForUsers(){

    const tableheader=[
        'id',
        'Tên',
        'Tài khoản',
        'Số điện thoai',
        'Ngày sinh',
        '...',
    ];
    const [data,setData]=useState(
        [
           {
                _id:0,
               name:'dat',
               birthDay:'',
           },
        ]
    )
    const getDataUser=()=>{
        axios({
            method:'get',
            url:'http://localhost:5000/api/users/',
        }).then(
            res=>{
                if(res.status==200){    
                    setData(res.data.result)
                }
            }
        )
    }
    useEffect(()=>{
        getDataUser()
    },[])

    return(
        <div style={AdminDefaultRightContainerStyle}>
            <AdminHomeHeader/>
            <div style={AdminContainerStyle}>
                <AdminTitleHeaderContainer title='Danh sách user'/>
                <div style={AdminContainerContentStyle}>
                    <AdminDefaultContentSearchTool name1='Tên người dùng' name2='Thêm người dùng' name3='http://localhost:3000/admin/adduser'/>
                </div>
                <div>
                    <AdminDefaultTable headertable={tableheader} datatable={data}/>
                </div>
            </div>

        </div>
    )
}