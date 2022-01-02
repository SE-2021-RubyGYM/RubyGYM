import React from "react";
import './PS_style.css';  


export default function PostManage(){
    const w3_open=(right)=>{
        if(right)
            
                return document.getElementById("mySidebar").style.display = "block";
            
        else
            return   document.getElementById("mySidebar").style.display = "none";
        
    }
    
    return (
        <div class = "all">
            <div class = "main-header">
                <a class = "logo">
                    <div class = "text-white"> 
                        <p>RubyGYM workplace </p>
                    </div>   
                </a>

                <nav class = "navbar-top"> 
                    <div className = "haha" id = "mySidebar" >
                        <div class = "main-sidebar">
                                <div class = "user-panel">                         
                                    <div class = "user-image">
                                        <img src = "https://dxclan.com:5000/upload/avatars/user.png" class = "user-image"/>
                                    </div>
                                </div>
                                <div class = "user-info">
                                    <p> Nguyễn Văn Đạt </p>
                                </div>
                                <ul class = "menu-sidebar">        
                                    <li class = "back-home text-sidebar"> 
                                        <a href = "https://dxclan.com/home" class = "home-design"> 
                                            <img src = "https://scontent.fhan5-11.fna.fbcdn.net/v/t1.15752-9/cp0/257931614_659818425187823_3504572347315744630_n.png?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=-uVGjcyWVh0AX8uXzX8&_nc_ht=scontent.fhan5-11.fna&oh=d50ac96c5d32a2e4a4aec6e6138654a8&oe=61C0C8B7" class = "home-icon icontype2"/>
                                            Trang chủ                
                                        </a>
                                    </li>
                                    <li class = "post-info ">                
                                            <img src = "https://scontent.fhan5-11.fna.fbcdn.net/v/t1.15752-9/cp0/257779067_423141875964192_923897012637186097_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=RBlThLbGjHUAX-B03O8&_nc_ht=scontent.fhan5-11.fna&oh=7a3535d4ee104c1b77c1ee882ab7d2b7&oe=61BDED0C" class = "icontype2 post-info-icon"/>
                                            Quản lí bài viết
                                    </li>   
                                    <li class = "text-sidebar">                            
                                        <button onClick={() => w3_open (false)} class="w3-bar-item w3-large button-closed"> Close &times;</button>                     
                                    </li>       
                                </ul>                                
                        </div>
            
                    </div>

                    <div class="w3-teal">
                        <button class="navbar-button w3-button w3-teal w3-xlarge" onClick={() => w3_open (true)}>☰</button>
                    </div>

                    <div class = "navbar-custom-menu"> 
                        <ul class = "navbar-icon">
                            <a href = "https://dxclan.com/user-guide">
                                <i class = "icon icon2"> 
                                    <img src = "https://scontent.fhan5-10.fna.fbcdn.net/v/t1.15752-9/cp0/258174228_291577366311823_3841951648620352281_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=qW3jFfkoD0wAX_6DLoL&_nc_ht=scontent.fhan5-10.fna&oh=bace1e29e6bd963e402c13c222c28fb4&oe=61BE3E31"/>
                                </i>
                            </a>
                            <a href = "https://dxclan.com/user-guide">
                                <i class = "icon icon4"> 
                                    <img src = "https://scontent.fhan5-9.fna.fbcdn.net/v/t1.15752-9/cp0/256209975_409817734174832_3235942431454542480_n.png?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=6tboY_VrsngAX-ESuJu&_nc_oc=AQnoViVvsfBdVYeTtXPXaoXRXQW90NOs5jjK4qo1d-Yd943W1AgTj1U1XJ9R9VBh_sc&_nc_ht=scontent.fhan5-9.fna&oh=4e9a2e0334b3cf0721e6803e3840f5b5&oe=61C0C613"/>
                                </i>
                            </a>
                            <a href = "https://dxclan.com/user-guide">
                                <i class = "icon icon3"> 
                                    <img src = "https://scontent.fhan5-11.fna.fbcdn.net/v/t1.15752-9/cp0/257771310_411593857366136_1318542642080658688_n.png?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Vo95ytmsfAgAX-lB_t1&_nc_ht=scontent.fhan5-11.fna&oh=e86ef158e987ad5ac7e972474eec9c12&oe=61BF2B2A"/>
                                </i>
                            </a>      
                        </ul>
                    </div> 
                </nav>
            </div>

            

            <div class = "main-content">            
                <div class = "content-header">
                    <h1> Quản lý thông tin bài viết </h1>
                </div>
                <div class = "content">
                    <div class = "box">
                        <div class = "box-body">
                            <div class = "form-inline">
                                <div class = "button-right">
                                    <button type = "button" class = "add-post"> Thêm bài viết </button>                
                                </div>
                                <div class = "form-group">
                                    <label class = "form-control-static"> Mã bài viết </label>
                                    <input class = "form-control" type = "text" placeholder = "Mã bài viết"/>
                                <label class = "form-control-static"> Người đăng bài </label>
                                    <input class = "form-control" type = "text" placeholder = "Người đăng bài"/>
                                </div>      
                            </div>   
                            <div class = "form-inline">
                                <div class = "form-group1">
                                    <label> Trạng thái bài viết </label>
                                </div>
                                <div class = "form-group1">
                                    <label> Nhóm bài viết </label>
                                </div>
                                <div class = "form-group1">
                                    <div class = "button-search">
                                        <button type = "button" class = "search"> Tìm kiếm </button>
                                    </div>
                                </div>
                            </div>
                        <table border = "1" class  ="table-content">
                            <thread>
                                <tr>
                                    <th className = "column"> Mã bài viết    </th>
                                    <th className = "column"> Tên bài viết   </th>
                                    <th className = "column"> Lượt truy cập  </th>
                                    <th className = "column"> Người đăng bài </th>
                                    <th className = "column"> Xem chi tiết   </th>
                                </tr>
                                <tr>
                                    <input className = "column" placeholder = "ehhe" />
                                </tr>
                            </thread>
                        </table>
                        </div>
                    </div>        
                </div>
            </div>
        </div>
    )
}
