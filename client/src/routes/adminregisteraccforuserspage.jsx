import { UserContext } from "../component/context/firstcontext";
// import AdminBlogList from "../component/trang/admin/adminBlogList";
import AdminLeftSidebar from "../component/trang/admin/adminleftsidebar";
import { useState } from "react";
import AdminRegisterAccForUsers from "../component/dat/adminregisteraccforuser/adminregisterforuser";


export default function AdminRegisterAccForUserPage(){
    const [margin,setMargin]=useState('250px')
    
    return(
        <div>
            <UserContext.Provider value={{margin,setMargin}}>
                <div style={{position:'fixed',zIndex:'1000'}}>
                    <AdminLeftSidebar/>
                </div>
                <div style={{marginLeft:margin,transition:'0.5s'}}>
                    <AdminRegisterAccForUsers/>
                </div>
            </UserContext.Provider>
        </div>
    )
}