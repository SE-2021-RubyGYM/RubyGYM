import React from "react";
import './Trang_style.css'



import { useState } from "react";
import { useEffect } from "react";

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
        link:'https://www.cfyc.com.vn/images_server/themes/celebration/img/testimonial/testimonial-5.png?v=1.2'
    },  
];



function SCslider(){
    const [margin,setMargin]=useState(0);
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
    const onMouseDown=()=>{
        
        return 0;
    }
 
    return(
        <div className="box-content">
            <div className="slide" onMouseDown={()=>{

            }}>
                <div className="content" style={{marginLeft:margin+'vw'}}>
                    {
                        card.map((element,index)=>{
                            return(
                                <img src={element.link} alt={element.text} />
                            )
                        })
                    }
                </div>
                <div className="button">
                    <div className="pr" onClick={()=>changeSlide(false)}>
                        <img src='https://www.cfyc.com.vn/images_server/themes/celebration/img/icons/arrow-prev.png' alt="" />
                    </div>
                    <div className="ne" onClick={()=>changeSlide(true)}>
                        <img src='https://www.cfyc.com.vn/images_server/themes/celebration/img/icons/arrow-prev.png' alt="" />
                    </div>
                </div>     
            </div>
            <div></div>
        </div>  
    )
}
export default SCslider;
