import './style.css'
import Header from './header.jsx'
import Footer from '../tung/footer.jsx'

import axios from 'axios';
import { useState, useEffect } from 'react';
import ReactHtmlParser from 'react-html-parser';

function Event() {

  const [content, setContent] = useState("")

  const getData = ()=>{
    axios({
      method: 'get',
      url: 'http://localhost:5000/api/adv',
    }).then(res=>{
      if(res.status==200){
        setContent(res.data.result[1].content)

      }
    }).catch(err => {
      alert("Tài khoản hoặc mật khẩu không chính xác!")
    });
  }

  getData()

  return (                                  
    <div id="event-page">
      <Header />
      <div id="event">
        <div className="event-cover">
          <div className="event-content" >
            <div className="event-header">
              <ul className="home-page">Trang chủ </ul>
              <ul className="arrow"> {">"} </ul>
              <ul className="event">Tin tức & sự kiện </ul> 
              <ul className="arrow"> {">"}  </ul>
            </div>  
            <hr />
            <div className="event-logo">
              TIN TỨC & SỰ KIỆN
            </div>
            <div className="new-content" style={{width:'100%'}}>
            {ReactHtmlParser(content)}
            </div>
          </div>
        </div>  
        
      </div>  
      <Footer />
    </div>           
  );
}
export default Event;