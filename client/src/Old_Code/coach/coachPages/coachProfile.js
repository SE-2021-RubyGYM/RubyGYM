import React, { useEffect, useState } from "react";
import './coach_profile_style.css';
import { useParams } from "react-router";
import axios from "axios";
import { BackEndBaseURL } from "../../../app/backend";
import { Table } from "reactstrap";
import { getCustomerList } from "../../../pages/Coach-customer/api/api";
const CoachProfile = function(){
// export default function CoachProfile(props) {
  const{ id } = useParams();
  const [coachInfo, setCoachInfo]= useState(
  {
    _id:"",
    name: 'Nguyễn Văn Công Sơn',
    image_coach: 'https://i.insider.com/5ab53db4095b111a068b45b6?width=700',
    ID_coach: 'IT3040',
    coach_username: "congson1907",
    sex: 'Nam',
    dob: '09/09/2000',
    phone_number: '0969050601',  
    
    
  });
  const [userInfo, setUserInfo]= useState(
    {
    _id:"Đang tải",
    name: 'Đang tải',
    phone: "Đang tải",
    }
  )

  const [dob, setDate] = useState(coachInfo.birthDay);
  const [sex, setSex] = useState(coachInfo.sex);
  const [phone_number, setNumb] = useState(coachInfo.phone);
  
  useEffect(() => {
    axios({
      method: "get",
      url: BackEndBaseURL + "/api/coachs/" + id,
    }).then((res) => {
      if (res.status == 200 || res.status == true) {
        setCoachInfo(res.data.result);
      }
    });
});

  useEffect(async () => {
    
    var c = await getCustomerList();
    if (c != null) {
      if (c.length > 0) {
        setUserInfo(c);
      } else {
        setUserInfo([
          {
            _id:"Không có",
            name: 'Không có',
            phone: "Không có",
          },
        ]);
      }
    }
  }, []);

 
return (
<div className="ad_xct_hlv_content-chinh">
    <div className="ad_xct_hlv_main-content" id="main_content_play">
      <div className="ad_xct_hlv_content-header">
        <div className="ad_xct_hlv_title">
          <h2> Thông tin chi tiết của huấn luyện viên {coachInfo.name} </h2>
        </div>
        <hr className="ad_xct_hlv_red-line" />
      </div>

        <div className="ad_xct_hlv_content">
            <div className="ad_xct_hlv_box">
                <div className="ad_xct_hlv_box-body">
                    <div className="ad_xct_hlv_coach_image">
                    <img
                        src={coachInfo.image}
                        className="ad_xct_hlv_image-coach"
                    />
                    </div>

                    <div className="ad_xct_hlv_box-coach-infor">
                        <div className = "ad_xct_hlv_coach-name"> Mã huấn luyện viên: {coachInfo._id} </div>
                        
                        <div className="ad_xct_hlv_coach-name">Họ và tên: {coachInfo.name}</div>
                        <div className = "ad_xct_hlv_coach-name">Tên tài khoản: {coachInfo.username} </div>
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
                                value={coachInfo.phone}
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
                                value={coachInfo.birthDay}
                                onChange={(e) => {
                                setDate(e.target.value);
                            }}
                            />
                        </form></div>
                        <div className="ad_xct_hlv_coach-name">Chuyên ngành: {coachInfo.major}</div>
                        
                    </div>
                </div>
              
                <div className = "ad_xct_hlv_box-body-fix">
                  <div className = "ad_xct_hlv_coach_manager_user">
                  <div className = "ad_xct_hlv_list-user"> Danh sách khách hàng do {coachInfo.name} quản lý  </div>
                    
                  <div className="ad_xct_hlv_box-body-user">
            <Table>
              <thead>
                <tr>
                        <th className="w-5">Mã khách hàng</th>
                        <th className="w-20">Tên khách hàng</th>
                        <th className="w-10">Số điện thoại</th>
                        
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>{userInfo._id}</td>
                    <td>{userInfo.name}</td>
                    <td>{userInfo.phone}</td>
                 </tr>
                            
              </tbody>

            </Table>
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

    
  
}
export default CoachProfile