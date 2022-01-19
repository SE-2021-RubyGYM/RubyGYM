import { useState } from "react"
import './adminhomeheaderstyle.css'


export default function AdminHomeHeader(){
    const notificationIcon='https://cdn-icons.flaticon.com/png/128/2058/premium/2058148.png?token=exp=1637689396~hmac=51948d2dde6315dd4268d966c60c7fc1'




    // this need to set by api's res
    const [adminInfo,setAdminInfo]=useState(
        {
            picture:'https://cdn-icons.flaticon.com/png/128/3136/premium/3136101.png?token=exp=1637681714~hmac=a4353897d09277a372682bd1e90073d2',
            name:'Nguyen Van Dat',   
        }
    );

    return(
        <div className="admin-blog-list-header">
                <div className="show-navigation">
                    {/* <img src={showNaviIcon} alt="" /> */}
                </div>
                <div className="admin-blog-list-tool">
                    <div className="icon-notification">
                        <img src={notificationIcon} alt="" />
                    </div>
                    <div className='admin-profiler'>
                        <img src={adminInfo.picture} alt="" />
                    </div>
                </div>
        </div>
    )
}