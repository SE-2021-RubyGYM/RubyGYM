import AdminLeftSidebar from "../component/trang/admin/adminleftsidebar";

import { useState } from "react";


import { UserContext } from "../component/context/firstcontext";
import AdminAddUser from "../component/dat/adminadduser/adminadduser";

export default function AdminAddUserPage(){
    const [margin,setMargin]=useState('250px')
    
    return(
        <div>
            <UserContext.Provider value={{margin,setMargin}}>
                <div style={{position:'fixed',zIndex:'1000'}}>
                    <AdminLeftSidebar/>
                </div>
                <div style={{marginLeft:margin,transition:'0.5s'}}>
                    <AdminAddUser/>
                </div>
            </UserContext.Provider>
        </div>
    )
}




