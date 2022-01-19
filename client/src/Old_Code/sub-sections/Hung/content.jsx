import './style.css'

const img_facilities_row1 = [
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/huong-dan-giam-can.jpg?v=CFYC-CFYCWEBSITE-722"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/yoga-giam-can.jpg?v=0.2"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/the-duc-giam-can.jpg?v=0.1"
  }
]

const img_facilities_row2 = [
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/dance-giam-can.jpg?v=0.2"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/tap-the-duc-giam-can.jpg?v=0.1"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/mma-giam-can.jpg?v=0.1"
  }
]

const img_facilities_row3 = [
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/cach-giam-can-nhanh-nhat.jpg?v=CFYC-CFYCWEBSITE-722"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/california-wow-find-your-club-1.jpg?v=0.1"
  }  
]

const img_facilities_row4 = [
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/cach-giam-can-hieu-qua.jpg?v=0.1"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/trung-tam-the-hinh-ha-noi.jpg?v=0.1"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/cach-giam-can-hieu-qua-nhat.jpg?v=0.1"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/trung-tam-the-hinh-da-nang.jpg?v=0.1"
  }   
]

const img_facilities_row5 = [
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/trung-tam-the-hinh-binh-duong.jpg?v=0.1"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/cach-giam-can.jpg?v=0.1"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/trung-tam-the-hinh.jpg?v=0.1"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/giam-can-nhanh.jpg?v=0.3"
  }   
]

const img_facilities_row6 = [
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/club-nha-trang-light.jpg?v=0.1"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/club-nha-trang-dark.jpg?v=0.1"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/club-can-tho-light.jpg?v=0.1"
  },
  {
    url: "https://www.cfyc.com.vn/images_server/themes/celebration/img/home/club-can-tho-dark.jpg?v=0.1"
  }   
]
      

const text = [
  {
    content: "Dịch vụ luyện tập đa dạng, các bài giảm cân khoa học"
  },
  {
    content: "Đến với chúng tôi, trải nghiệm không gian hiện đại!"
  },
  {
    content: "Hiện chúng tôi đã trang bị những trang thiết bị hiện đại nhất phục vụ cho quý khách, hãy đến với trung tâm để bắt đầu tập luyện với cách giảm cân nhanh nhất của chúng tôi hoặc tìm hiểu những bài tập phù hợp"
  }
]

function ContentIntro() {
  return (                                  
    <div className='content_Intro'>
    <div id="html">

    
      {/* Phần content */}
      <div id="content" >
        <div className="container-page">
          <div className="new-header text-center">
            <h2>{text[0].content}</h2>         
            <div class="cool-divider short-red-line center" id="line_s"></div>
          </div>
        </div>

        <div className="row-facilities">
          <div className="row">
            {
              img_facilities_row1.map((element, index) => {
                return (
                <div className="fal-dance">
                  <img className="img-falcilities" src = {element.url} alt="Chào mừng bạn đến với Ruby Gym" />
                </div>
                )
              })
            }
        
          </div>
          <div className="row">
            {
              img_facilities_row2.map((element, index) => {
                return (
                <div className="fal-dance">
                  <img className="img-falcilities" src = {element.url} alt="Chào mừng bạn đến với Ruby Gym" />
                </div>
                )
              })
            }
          </div>                
        </div>

        <div className="container-page">
          <div className="new-header text-center">
            <h2> {text[1].content} </h2>
            <div className="row-sub">
             
                <p>
                  {text[2].content}
                </p>
              
              <div class="cool-divider short-red-line center" id="line_s"></div>
            </div>
          </div>
        </div>

        <div className="row-facilities">
          <div className="row">
            {
              img_facilities_row3.map((element, index)=>{
                return (
                  <div className="fal-gym">
                    <img className="img-falcilities" src={element.url} alt="Chào mừng bạn đến với Ruby Gym"/>
                  </div>
                )
              })
            }
          </div>
          
          <div className="row">
            {
              img_facilities_row4.map((element, index)=>{
                return (
                  <div className="fal-gym">
                    <img className="img-falcilities" src={element.url} alt="Chào mừng bạn đến với Ruby Gym"/>
                  </div>
                )
              })
            }
          </div>

          <div className="row">
            {
              img_facilities_row5.map((element, index)=>{
                return (
                  <div className="fal-gym">
                    <img className="img-falcilities" src={element.url} alt="Chào mừng bạn đến với Ruby Gym"/>
                  </div>
                )
              })
            }
          </div>

          <div className="row">
            {
              img_facilities_row6.map((element, index)=>{
                return (
                  <div className="fal-gym">
                    <img className="img-falcilities" src={element.url} alt="Chào mừng bạn đến với Ruby Gym"/>
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>

    </div>  
    </div>         
  );
}
export default ContentIntro;