import './style.css' 

import { useState } from "react";
import { useEffect } from "react";
import React from 'react';


function Slider(){
    const [sliderimgs,setSliderImgs]=useState([
        {
            text:'img1',
            link:'https://landing.cfyc.com.vn/storage/app/media/sliders/web2-d.jpg',
        },
        {
            text:'img2',
            link:'https://landing.cfyc.com.vn/storage/app/media/sliders/web1-d.jpg',
        },
        {
            text:'img3',
            link:'https://landing.cfyc.com.vn/storage/app/media/sliders/web3-d.jpg'
        },
    ])

    const [isHovering,setIsHovering]=useState(false);
    const [margin,setMargin]=useState(0);
    useEffect(()=>{
        const cc=setInterval(() => {
            if(isHovering){
                
            }else{
                changeSlide(true);
            }
        },3000);
        return ()=> clearInterval(cc)
    })

    const changeSlide=(right)=>{
        if(right){
            if(margin==(-100*(sliderimgs.length-1))){
                setMargin(0);
            }else{
                setMargin((e)=>e-100);
            }
        }else{
            if(margin==0){
                setMargin(-100*(sliderimgs.length-1));
            }else{
                setMargin((e)=>e+100);
            }
        }
    }
    
    const setHovering=(enter)=>{
        setIsHovering(enter)
    }    

    return(
        <div className="slider">
            <div className="slide" 
                onMouseEnter={()=>setHovering(true)} 
                onMouseLeave={()=>setHovering(false)}
                onMouseDown={(e)=>{console.log(e.clientX)}}
            >
                
                <div className="content" style={{marginLeft:margin+'vw'}}>
                    {
                        sliderimgs.map((element,index)=>{
                            return(
                                <img src={element.link} alt={element.text} />
                            )
                        })
                    }
                </div>
                {/* <div className='but'>
                    <button className='pre' onClick={()=>changeSlide(false)} >
                    </button>
                    <button className='next'onClick={()=>changeSlide(true)}>
                    </button>
                </div> */}
            </div>
        </div>  
    )
}
export default Slider;
