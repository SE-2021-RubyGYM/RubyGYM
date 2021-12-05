import AdminBlogList from "../component/trang/admin/adminBlogList";
import AdminLeftSidebar from "../component/trang/admin/adminleftsidebar";

import { useState } from "react";
import { useEffect } from "react";
import { useContext,createContext } from "react";
import AddBlog from "../component/dat/addBlog";

import { UserContext } from "../component/context/firstcontext";

import Context from "./adminForm/SetContent";
import AdminForm from "./adminForm/adminForm";

export default function Adminaddblogpage(){
    const [margin,setMargin]=useState('250px')
    
    return(
        <div>

            <AdminForm/>
                {/* <div style={{position:'fixed',zIndex:'1000'}}>
                    <AdminLeftSidebar/>
                </div> */}
                {/* <div style={{marginLeft:margin,transition:'0.5s'}}> */}
                    <AddBlog/>
                {/* </div> */}
            
        </div>
    )
}