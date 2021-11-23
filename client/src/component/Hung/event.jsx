import './style.css'
import Header from './header.jsx'
function Event() {

  return (                                  
    <div id="event-page">
      <Header />
      <div id="event">
        <div className="event-cover">
          <div className="event-content" >
            <div className="event-header">
              <ul className="home-page">Trang chủ </ul>
              <ul className="arrow"> ></ul>
              <ul className="event">Tin tức & sự kiện </ul> 
              <ul className="arrow"> > </ul>
            </div>  
            <hr />
            <div className="event-logo">
              TIN TỨC & SỰ KIỆN
            </div>
          </div>     
        </div>  
      </div>  
    </div>           
  );
}
export default Event;