import { useState } from "react"
import './adminleftsidebarstyle.css'
import { useEffect } from "react"
import React from "react"
import { Link } from "react-router-dom"
import { useContext } from "react";

// import { UserContext } from "../../../routes/adminBlogListPage";

import { UserContext } from "../../context/firstcontext";

export default function AdminLeftSidebar(){
    const [adminBasicInfo,setAdminBasicInfo]=useState(
        {
            picture:'https://cdn-icons.flaticon.com/png/128/3136/premium/3136101.png?token=exp=1637681714~hmac=a4353897d09277a372682bd1e90073d2',
            name:'Nguyen Van Dat',   
        }
    )
    const [adminChoices,setAdminChoices]=useState(
        [
            {
                icon:'https://cdn-icons.flaticon.com/png/128/2163/premium/2163300.png?token=exp=1637683665~hmac=3d4ad51e2c6d2c219188116aad722fcf',
                name:'Quản lý bài viết',
                childChoices:[
                    {
                        icon:'https://cdn-icons.flaticon.com/png/128/3172/premium/3172961.png?token=exp=1637681283~hmac=f19f42faf98470289e047b99b3f4f0e5',
                        name:'Danh sách bài viết',
                    },
                  
                ],
                //  displayChild:
            },
            {
                icon:'https://cdn-icons.flaticon.com/png/128/2163/premium/2163300.png?token=exp=1637683665~hmac=3d4ad51e2c6d2c219188116aad722fcf',
                name:'User',
                childChoices:[
                    {
                        icon:'https://cdn-icons.flaticon.com/png/128/3172/premium/3172961.png?token=exp=1637681283~hmac=f19f42faf98470289e047b99b3f4f0e5',
                        name:'Quản lý tài khoản',
                    },
                ],
            
                //  displayChild:
            },

        ]
    )
    const [displayChild,setDisplayChild]=useState(
        Array(adminChoices.length).fill('none')
    );
    const setAlldDisplayChoice=()=>{
        const newDisplayChild=[...displayChild]
        newDisplayChild.fill('none');
        setDisplayChild(newDisplayChild);
    }
    const setDisplayChoice=(index)=>{
        if(index<0) return;
        if(index>=adminChoices.length) return;
        const newDisplayChild=[...displayChild]
        if(newDisplayChild[index]=='block'){
            newDisplayChild.fill('none');
            // newDisplayChild[index]='block';
        }else{
            newDisplayChild.fill('none');
            if(widthLeftSideBar=='50px')
                handleOnClickShowButton()
            newDisplayChild[index]='block';
        }
        
        setDisplayChild(newDisplayChild);
    }

    const handleChoiceOnClick=(index)=>{   
        setDisplayChoice(index)
    }
    const [hiddenMode,setHiddenMode]=useState(
        Array(adminChoices.length).fill('block')
    )
    const disPlayElementOnHiddenMode=()=>{
        if(hiddenMode[0]=='none')
            setHiddenMode(Array(adminChoices.length).fill('block'))
        else 
            setHiddenMode(Array(adminChoices.length).fill('none'))
    }
    const [widthLeftSideBar,setWidthLeftSidebar]=useState('250px')
    const setWidthOnHiddenMode=()=>{
        if(widthLeftSideBar=='250px'){
            setWidthLeftSidebar('50px')
        }else{
            if(widthLeftSideBar=='50px'){
                setWidthLeftSidebar('250px')
            }
        }
    }
    
    const handleOnClickShowButton=()=>{
     

        setWidthOnHiddenMode()
        disPlayElementOnHiddenMode()
        setAdminInfoShow()
        handleShowButtonChangeMode()
        setAlldDisplayChoice()
        setMarginTest()
    }

    const [displayAdminInfo,setDisplayAdminInfo]=useState('block')
    const setAdminInfoShow=()=>{
        if(displayAdminInfo=='block'){
            setDisplayAdminInfo('none')
        }else{
            if(displayAdminInfo=='none'){
                setDisplayAdminInfo('block')
            }
        }
        
    }
    
    const [showButtonPosision,setShowButPosision]=useState(
        {position:'absolute',right:'0',marginLeft:'30px',marginTop:'0px',marginRight:'0px'}    
    )
    
    const handleShowButtonChangeMode=()=>{
        if(showButtonPosision.marginRight=='10px'){
            const newStyle={
                position:'absolute',right:'0',marginLeft:'30px',marginTop:'8px',marginRight:'0px',
            }
            
            setShowButPosision(newStyle)
        }else{
            if(showButtonPosision.marginRight=='0px'){
                const newStyle={
                    position:'absolute',right:'0',marginLeft:'30px',marginTop:'40px',marginRight:'10px',
                }
                
                setShowButPosision(newStyle)
            }
        }
    }
    const {margin,setMargin}=useContext(UserContext);
    const setMarginTest=()=>{
        if(widthLeftSideBar=='50px'){
            setMargin('250px')
        }else{
            if(widthLeftSideBar=='250px'){
                setMargin('50px')
            }
        }
    }
    return (
        <React.Fragment>
        <div className="admin-nav" style={{width:widthLeftSideBar}}>
            <div className='show-icon' style={showButtonPosision}
                onClick={()=>{
                    handleOnClickShowButton()
                }}
            >
                <img src='https://cdn-icons.flaticon.com/png/128/2430/premium/2430485.png?token=exp=1637699775~hmac=7067ebb8e8b8a63b9f5ed4d8854b26c0' alt="" />
            </div>
            <div className='admiv-nav-title'>
                <div>RUBY WP</div>
            </div>
            <div className='adminBasicInfo'>
                <div className="admin-img">
                    <img src={adminBasicInfo.picture} alt="" />
                </div>
                <div className='admin-name-and-status' style={{display:displayAdminInfo,}}>
                    <div className='admin-name'>
                        <div>{adminBasicInfo.name}</div>
                    </div>
                    <div className='admin-status'>
                        <div className='online-status'>
                            <div>

                            </div>
                            <div>
                                <div>Online</div>
                            </div>
                        </div>
                        <div className='notification'>
                            <div>

                            </div>
                            <div>
                                <a href="#">
                                    <div>Thông báo</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='admin-choice'>
                {
                    adminChoices.map((element,index)=>{
                        return(
                            <div className='admin-choice-container' 
                                onClick={()=>{
                                    handleChoiceOnClick(index);
                                }}
                                
                            >
                                <div className='container'>
                                    <div className='admin-choice-container-icon'>
                                        <img src={element.icon} alt="" />
                                    </div>
                                    <div className='admin-choice-container-name' style={{display:hiddenMode[index]}}>
                                        <div>{element.name}</div>
                                    </div>
                                </div>
                                
                                <div className='admin-choice-child-container' style={{display:displayChild[index]}} >
                                {
                                    element.childChoices.map((element,index)=>{
                                        var linkTo='#'
                                        if(element.name=='Quản lý tài khoản')
                                            linkTo='/admin/registeraccforuser';
                                        if(element.name=='Danh sách bài viết')
                                            linkTo='/admin/bloglist';
                                       
                                        return(
                                            <Link to={linkTo}>
                                                <div className='admin-choice-container-child'>
                                                    <div className='admin-choice-container-child-icon'>
                                                        <img src={element.icon} alt="" />
                                                    </div>
                                                    <div className='admin-choice-container-child-name'>
                                                        <div>{element.name}</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        
                                        )
                                    })
                                }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </React.Fragment>
    )
   
}