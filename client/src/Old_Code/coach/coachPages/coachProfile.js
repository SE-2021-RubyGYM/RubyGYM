import React, { useState } from "react";
import './coach_profile_style.css';
import { useParams } from "react-router";
import axios from "axios";
const coach_ruby = [
  {
    name: 'Nguyễn Văn Công Sơn',
    image_coach: 'https://i.insider.com/5ab53db4095b111a068b45b6?width=700',
    ID_coach: 'IT3040',
    coach_username: "congson1907",
    sex: 'Nam',
    dob: '09/09/2000',
    phone_number: '0969050601',  
    major1: 'Yoga',
    major2: '...',
    major3: 'Kickfit'
    
  },
];

export default function CoachProfile(props) {
  const [dob, setDate] = useState(coach_ruby[0].dob);
  const [sex, setSex] = useState(coach_ruby[0].sex);
  const [phone_number, setNumb] = useState(coach_ruby[0].phone_number);
  
  return (
    <div className="ad_xct_hlv_all">
      {coach_ruby.map((element, index) => {
        
        return (
        <div className="ad_xct_hlv_content-chinh">
            <div className="ad_xct_hlv_main-content" id="main_content_play">
              <div className="ad_xct_hlv_content-header">
                <div className="ad_xct_hlv_title">
                  <h2> Thông tin chi tiết của huấn luyện viên {element.name} </h2>
                </div>
                <hr className="ad_xct_hlv_red-line" />
              </div>

                <div className="ad_xct_hlv_content">
                    <div className="ad_xct_hlv_box">
                        <div className="ad_xct_hlv_box-body">
                            <div className="ad_xct_hlv_coach_image">
                            <img
                                src="https://i.insider.com/5ab53db4095b111a068b45b6?width=700"
                                className="ad_xct_hlv_image-coach"
                            />
                            </div>

                            <div className="ad_xct_hlv_box-coach-infor">
                                <div className = "ad_xct_hlv_coach-name"> Mã huấn luyện viên: {element.ID_coach} </div>
                                
                                <div className="ad_xct_hlv_coach-name">Họ và tên: {element.name}</div>
                                <div className = "ad_xct_hlv_coach-name">Tên tài khoản: {element.coach_username} </div>
                                <div className="ad_xct_hlv_coach-name">
                                <form action="action_page.php">
                                    <label for="datefinish" > Giới tính: </label>
                                    <input
                                        type="text"
                                        id="datefinish"
                                        name="sex"
                                        placeholder="dd/mm/yy"
                                        value={sex}
                                        onChange={(e) => {
                                        setSex(e.target.value);
                                    }}
                                    />
                                </form>
                                </div>
                                <div className="ad_xct_hlv_coach-name"> 

                                <form action="action_page.php">
                                    <label for="datefinish" > Số điện thoại: </label>
                                    <input
                                        type="text"
                                        id="datefinish"
                                        name="datefinish"
                                        placeholder="phone number"
                                        value={phone_number}
                                        onChange={(e) => {
                                        setNumb(e.target.value);
                                    }}
                                    />
                                </form> </div>
                                
                                <div className="ad_xct_hlv_coach-name"><form action="action_page.php">
                                    <label for="datefinish" > Ngày sinh: </label>
                                    <input
                                        type="text"
                                        id="datefinish"
                                        name="datefinish"
                                        placeholder="dd/mm/yy"
                                        value={dob}
                                        onChange={(e) => {
                                        setDate(e.target.value);
                                    }}
                                    />
                                </form></div>
                                <div className="ad_xct_hlv_coach-name">Chuyên ngành: {element.major1}/ {element.major2}/ {element.major3}</div>
                               
                            </div>
                        </div>
                     
                        <div className = "ad_xct_hlv_box-body-fix">
                          <div className = "ad_xct_hlv_coach_manager_user">
                          <div className = "ad_xct_hlv_list-user"> Danh sách khách hàng do {element.name} quản lý  </div>
                            
                          <div className="ad_xct_hlv_box-body-user">
                    <table border="1" className="ad_xct_hlv_table-content-user">
                      <thread>
                        < tr >
                          <th className="ad_xct_hlv_column column1"> STT </th>
                          <th className="ad_xct_hlv_column "> Mã khách hàng </th>
                          <th className="ad_xct_hlv_column"> Tên khách hàng</th>
                          
                          <th className="ad_xct_hlv_column"> Thời gian tập </th>
                          <th className="ad_xct_hlv_column"> Môn tập </th>
                          
                        </tr>
                        <tr>
                          <th className="ad_xct_hlv_co ">1 </th>
                          <th className="ad_xct_hlv_co"> ABC</th>
                          <th className="ad_xct_hlv_co"> Nguyễn Sỹ Lợi</th>
                          <th className="ad_xct_hlv_co">
                            <div className = "ad_xct_hlv_time_uu">
                               Thứ 5: 8:00 - 10:00
                               </div>
                               <div className = "ad_xct_hlv_time_uu">
                               Thứ 7: 8:00 - 10:00
                               </div>
                           </th>
                          <th className="ad_xct_hlv_co"> Yoga </th>
                          
                        </tr>
                        <tr>
                          <th className="ad_xct_hlv_co">2 </th>
                          <th className="ad_xct_hlv_co"> MMDN</th>
                          <th className="ad_xct_hlv_co"> Bùi Thị Phương</th>
                          <th className="ad_xct_hlv_co">
                            <div className = "ad_xct_hlv_time_uu">
                               Thứ 5: 8:00 - 10:00
                               </div>
                               <div className = "ad_xct_hlv_time_uu">
                               Thứ 7: 8:00 - 10:00
                               </div>
                           </th>
                          <th className="ad_xct_hlv_co"> Yoga </th>
                          
                        </tr>
                        <tr>
                          <th className="ad_xct_hlv_co">3 </th>
                          <th className="ad_xct_hlv_co"> DHD</th>
                          <th className="ad_xct_hlv_co"> Nguyễn Sỹ Lợi</th>
                          <th className="ad_xct_hlv_co">
                            <div className = "ad_xct_hlv_time_uu">
                               Thứ 2: 18:00 - 20:00
                               </div>
                               <div className = "ad_xct_hlv_time_uu">
                               Thứ 7: 8:00 - 10:00
                               </div>
                           </th>
                          <th className="ad_xct_hlv_co"> Yoga </th>
                          
                        </tr>
                        <tr>
                          <th className="ad_xct_hlv_co">4 </th>
                          <th className="ad_xct_hlv_co"> ABC</th>
                          <th className="ad_xct_hlv_co"> Nguyễn Sỹ Lợi</th>
                          <th className="ad_xct_hlv_co">
                            <div className = "ad_xct_hlv_time_uu">
                               Thứ 5: 8:00 - 10:00
                               </div>
                               <div className = "ad_xct_hlv_time_uu">
                               Thứ 7: 8:00 - 10:00
                               </div>
                           </th>
                          <th className="ad_xct_hlv_co"> Yoga </th>
                          
                        </tr>
                        <tr>
                          <th className="ad_xct_hlv_co">5 </th>
                          <th className="ad_xct_hlv_co"> ABC</th>
                          <th className="ad_xct_hlv_co"> Nguyễn Sỹ Lợi</th>
                          <th className="ad_xct_hlv_co">
                            <div className = "ad_xct_hlv_time_uu">
                               Thứ 5: 8:00 - 10:00
                               </div>
                               <div className = "ad_xct_hlv_time_uu">
                               Thứ 7: 8:00 - 10:00
                               </div>
                           </th>
                          <th className="ad_xct_hlv_co"> Yoga </th>
                          
                        </tr>
                        <tr>
                          <th className="ad_xct_hlv_co">6 </th>
                          <th className="ad_xct_hlv_co"> ABC</th>
                          <th className="ad_xct_hlv_co"> Nguyễn Sỹ Lợi</th>
                          <th className="ad_xct_hlv_co">
                            <div className = "ad_xct_hlv_time_uu">
                               Thứ 5: 8:00 - 10:00
                               </div>
                               <div className = "ad_xct_hlv_time_uu">
                               Thứ 7: 8:00 - 10:00
                               </div>
                           </th>
                          <th className="ad_xct_hlv_co"> Yoga </th>
                          
                        </tr>
                      </thread>
                    </table>
                  </div>
                          </div>

                            

                            
                        </div>
                    </div>

                    <div className="ad_xct_hlv_text-center">
                            <button className="ad_xct_hlv_button" input type="submit" value="Submit" > Cập nhật thông tin </button>
                    </div>    
                </div>
            </div>
        </div>
        );
      })}
    </div>
  );
}
