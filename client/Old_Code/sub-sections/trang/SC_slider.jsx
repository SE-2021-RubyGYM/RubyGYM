import './Trang_style.css' 

import { useState } from "react";
import { useEffect } from "react";
import React from 'react';
const card=[
  {
    text:'img1',
    link:'https://www.cfyc.com.vn/images_server/themes/celebration/img/testimonial/testimonial-5.png?v=1.2',
},
{
    text:'img2',
    link:'https://www.cfyc.com.vn/images_server/themes/celebration/img/testimonial/testimonial-1.png?v=1.2',
},
{
    text:'img3',
    link:'https://www.cfyc.com.vn/images_server/themes/celebration/img/testimonial/testimonial-2.png?v=1.2'
}, 
{
  text:'img4',
  link:'https://www.cfyc.com.vn/images_server/themes/celebration/img/testimonial/testimonial-3.png?v=1.2'
}, 
{
text:'img5',
link:'https://www.cfyc.com.vn/images_server/themes/celebration/img/testimonial/testimonial-4.png?v=1.2'
},    
];



function SCSlider(){
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
            if(margin==(-100*(card.length-1))){
                setMargin(0);
            }else{
                setMargin((e)=>e-100);
            }
        }else{
            if(margin==0){
                setMargin(-100*(card.length-1));
            }else{
                setMargin((e)=>e+100);
            }
        }
    }
    
    const setHovering=(enter)=>{
        setIsHovering(enter)
    }    

    return(
        <div className="SCslider">
            <div className="SCslide" 
                onMouseEnter={()=>setHovering(true)} 
                onMouseLeave={()=>setHovering(false)}
                onMouseDown={(e)=>{console.log(e.clientX)}}
            >
                
                <div className="content" style={{marginLeft:margin+'vw'}}>
                    {
                        card.map((element,index)=>{
                            return(
                                <img src={element.link} alt={element.text} />
                            )
                        })
                    }
                </div>
                { <div className='button-slide'>
                    <button className='pre' onClick={()=>changeSlide(false)}>
                         </button>
                    <button className='next'onClick={()=>changeSlide(true)}>
                   
                    </button>
                </div> }
            </div>
        </div>  
    )
}
export default SCSlider;