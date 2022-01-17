


import './style_newfeed.css';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';

import { useParams } from "react-router-dom";

export default function NewFeed(){

    const [article,setData]=useState([
        {
            _id: 0,
            title: "0",
            content: '0',
            time: '0',
            picture: '0', 
            view: 0,
        }
    ]);

    const getData= ()=>{
        axios({
            method:'get',
            url:'http://localhost:5000/api/adv',
        }).then(res=>{
            setData(res.data.result)
            // console.log(res)
        })
    }
    // getData()
    
    useEffect(() => {

        getData();

    }, [])

    return (
    <div className="container_newfeed">
        <div className="page_top"></div>
        <div className="newfeed">
            <div className="page-link">
                <ol className="links">
                    <li class="link-item">
                        <Link to ="/user/home">Trang chủ</Link>
                    </li>
                    <li class="link-item">
                        <Link to ="/user/blog">Tin tức &amp; Sự kiện</Link>
                    </li>
                </ol>
                </div>
            <div className="header_newfeed">
             {
                <h1 className="header_title">
                      
                    BÀI VIẾT MỚI NHẤT</h1>
             }
        </div>
        <div className="content_newfeed">
            {
                article.map((element , index)=>{
                    return(
                        <div className="section">
                            <div className="image-wrapper">
                                <img className="image_link" src={element.picture} alt="" onClick={()=>{
                                     window.open("http://localhost:3000/user/blog/"+element._id);
                                }}/>      
                            </div>
                            <div className="info-wrapper">
                                <div className="red-dot"> Tin tức &amp; Sự kiện</div>
                                <div className="date">
                                    <h4>{element.time}</h4>
                                </div>
                                <a className="title" href ={"http://localhost:3000/user/blog/"+element._id} title={element.title} >
                                    <p >{element.title}</p>
                                </a>
                            </div>
                        </div>
                    )
                
                }
                )
            }
            
            
        </div>
         <div className="page_bottom"></div>
    </div> 
    </div> 
            
            
         
         
            

    )
    
}
