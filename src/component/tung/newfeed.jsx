import './style_newfeed.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

import axios from 'axios';

import Footer from './footer';

// const article =[
//    {
//     urlImg: 'https://images.cfyc.com.vn/life/phn_image/article/sunlife-1609318828.png',
//     title : 'CHƯƠNG TRÌNH KHUYẾN MẠI “ĐẦU TƯ TƯƠNG LAI, SỐNG AN VỮNG VÀNG” DÀNH CHO KHÁCH HÀNG CALIFORNIA FITNESS & YOGA',
//     link  : '',
//     date  : '11/9/2021',
//    } ,
//    {
//     urlImg:'https://images.cfyc.com.vn/life/phn_image/article/fb-1603277488.jpg ',
//     title : 'CHƯƠNG TRÌNH KHUYẾN MẠI “ĐẦU TƯ TƯƠNG LAI, SỐNG AN VỮNG VÀNG” DÀNH CHO KHÁCH HÀNG CALIFORNIA FITNESS & YOGA',
//     date  : '16/10/2001'
//    },
//    {
//     urlImg:'https://images.cfyc.com.vn/life/phn_image/article/Referral-Post---Program-Introduction-1080x1080--1--1598026589.jpg',
//     title : 'CHƯƠNG TRÌNH KHUYẾN MẠI “ĐẦU TƯ TƯƠNG LAI, SỐNG AN VỮNG VÀNG” DÀNH CHO KHÁCH HÀNG CALIFORNIA FITNESS & YOGA',
//     date  : '15/11/2007  '
//    },
// ]

export default function NewFeed(){
    const [article,setData]=useState([
        {
            
        }
    ]);

    const getData= ()=>{
        axios({
            method:'get',
            url:'http://localhost:5000/api/adv',
        }).then(res=>{
            setData(res.data.result)
        })
    }
    getData()
    
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
                                     window.open('#');
                                }}/>      
                            </div>
                            <div className="info-wrapper">
                                <div className="red-dot"> Tin tức &amp; Sự kiện</div>
                                <div className="date">
                                    <h4>{element.time}</h4>
                                </div>
                                <a className="title" href ='#' title={element.title} >
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
