import React, { useState } from "react";
import './user_profile_style.css';

const user_ruby = [
  {
    name: 'Nguyễn Văn A',
    ID_user: 'IT3040',
    phone_number: '096905605',
    sex: 'Nam',
    dob: '09/09/2000',
    mail: 'abcd@gmai.com',
    rank: 'Bạc',
    start: '08/12/2021',
    finish: '08/1/2022',
    chieucao: '169 ',
    cannang: '49',
    bmi: '20',
  },
];

export default function UserProfile(props) {
  const [datefinish, setDate] = useState(user_ruby[0].finish);
  const [chieucao, setHeight] = useState(user_ruby[0].chieucao);
  const [cannang, setWeight] = useState(user_ruby[0].cannang);
  const [bmi, setBmi] = useState(user_ruby[0].bmi);
  return (
    <div className="ad_all">
      {user_ruby.map((element, index) => {
        
        return (
        <div className="ad_content-chinh">
            <div className="ad_main-content" id="main_content_play">
              <div className="ad_content-header">
                <div className="ad_title">
                  <h2> Thông tin chi tiết khách hàng {element.name} </h2>
                </div>
                <hr className="ad_red-line" />
              </div>

                <div className="ad_content">
                    <div className="ad_box">
                        <div className="ad_box-body">
                            <div className="ad_user_image">
                            <img
                                src="https://i.insider.com/5ab53db4095b111a068b45b6?width=700"
                                className="ad_image-user"
                            />
                            </div>

                            <div className="ad_box-user-infor">
                                <div className = "ad_user-name"> Mã khách hàng: {element.ID_user} </div>
                                <div className="ad_user-name">Họ và tên: {element.name}</div>
                                <div className="ad_user-name"> Số điện thoại: {element.phone_number} </div>
                                <div className="ad_user-name">Giới tính: {element.sex}</div>
                                <div className="ad_user-name">Ngày sinh: {element.dob}</div>
                                <div className="ad_user-name"> {' '} Thành viên hạng: {element.rank} </div>
                            </div>
                        </div>
                    
                        <div className = "ad_box-body-fix">
                            <div className="ad_user-name"> Thời gian đăng kí: {element.start}</div>
                            <div className="ad_user-name">
                                <form action="action_page.php">
                                    <label for="datefinish" > Thời gian gia hạn: </label>
                                    <input
                                        type="text"
                                        id="datefinish"
                                        name="datefinish"
                                        placeholder="dd/mm/yy"
                                        value={datefinish}
                                        onChange={(e) => {
                                        setDate(e.target.value);
                                    }}
                                    />
                                </form>
                            </div>

                            <div className="ad_user-name">
                                <form action="action_page.php">
                                    <label for="datefinish" > Huấn luyện viên: 
                                        <select>
                                                <option value="grapefruit">Bùi Thị Phương</option>
                                                <option value="lime">Nguyễn Hải Anh</option>
                                                <option value="coconut">HLV 03</option>
                                                <option value="mango">Huấn luyện viên C</option>
                                        </select>
                                    </label>    
                                </form>
                            </div>
                        </div>

                        <div className = "ad_box-body-fix">
                            <div className="ad_user-name">
                                <form>
                                    <label for="datefinish" >
                                        Chiều cao:
                                    </label>
                                    
                                    <input
                                        type="text"
                                        id="datefinish"
                                        name="datefinish"
                                        placeholder="Đơn vị: cm"
                                        value={chieucao}
                                        onChange={(e) => {
                                            setHeight(e.target.value);
                                        }}
                                        />
                                </form>
                            </div>

                            <div className="ad_user-name">
                                <form>
                                    <label for="datefinish" >
                                        Cân nặng:
                                    </label>
                                        <input
                                        type="text"
                                        id="datefinish"
                                        name="datefinish"
                                        placeholder="Đơn vị: kg"
                                        value={cannang}
                                        onChange={(e) => {
                                            setWeight(e.target.value);
                                        }}
                                        />
                                </form>
                            </div>

                            <div className="ad_user-name">
                                <form>
                                    <label for="datefinish" >
                                        Chỉ số BMI:
                                    </label>
                                        <input
                                            type="text"
                                            id="datefinish"
                                            name="datefinish"
                                            placeholder="Đơn vị: kg/m2"
                                            value={bmi}
                                            onChange={(e) => {
                                                setBmi(e.target.value);
                                            }}
                                        />
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="ad_text-center">
                            <button className="ad_button" input type="submit" value="Submit" > Cập nhật thông tin </button>
                    </div>    
                </div>
            </div>
        </div>
        );
      })}
    </div>
  );
}
