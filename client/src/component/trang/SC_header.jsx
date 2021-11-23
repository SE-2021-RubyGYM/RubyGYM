import React from "react";
import './Trang_style.css'
import { useState } from "react";
import { useEffect } from "react";

function SCheader(){
    return(
      <div className = "success-stories">
        <div className = "container-page">
          <div className = "box-header">
            <div className = "new-header">
              <div className = "title">
                <h2> Câu chuyện thành công </h2>
              </div>
              <div className = "row-sub">
                <div className ="explain-title">
                  <p> Khám phá phương pháp đã giúp thay đổi cuộc sống của hàng trăm ngàn người tại Việt Nam, giúp họ thay đổi hoàn toàn cơ thể bằng phương pháp giảm cân nhanh nhất, truyền cảm hứng và đạt được vẻ ngoài như mơ ước </p> 
                </div> 
              </div>  
              <hr className = "red"/>
            </div>
           </div> 
        </div>                                              
      </div>
   
    )
}

export default SCheader;

