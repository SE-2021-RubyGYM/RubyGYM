
import React, { useState } from "react";
import './user_info_style.css';

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

export default function UserInfo(props) {
  const [datefinish, setDate] = useState(user_ruby[0].finish);
  const [chieucao, setHeight] = useState(user_ruby[0].chieucao);
  const [cannang, setWeight] = useState(user_ruby[0].cannang);
  const [bmi, setBmi] = useState(user_ruby[0].bmi);
  return (
    <div className="all">
      {user_ruby.map((element, index) => {
        
        return (
        <div className="content-chinh">
            <div className="main-content" id="main_content_play">
              <div className="content-header">
                <div className="title">
                  <h2> Thông tin chi tiết khách hàng {element.name} </h2>
                </div>
                <hr className="red-line" />
              </div>

                <div className="content">
                    <div className="box">
                        <div className="box-body">
                            <div className="user_image">
                            <img
                                src="https://i.insider.com/5ab53db4095b111a068b45b6?width=700"
                                className="image-user"
                            />
                            </div>

                            <div className="box-user-infor">
                                <div className = "user-name"> Mã khách hàng: {element.ID_user} </div>
                                <div className="user-name">Họ và tên: {element.name}</div>
                                <div className="user-name"> Số điện thoại: {element.phone_number} </div>
                                <div className="user-name">Giới tính: {element.sex}</div>
                                <div className="user-name">Ngày sinh: {element.dob}</div>
                                <div className="user-name"> {' '} Thành viên hạng: {element.rank} </div>
                            </div>
                        </div>
                    
                        <div className = "box-body-fix">
                            <div className="user-name"> Thời gian đăng kí: {element.start}</div>
                            <div className="user-name">
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

                            <div className="user-name">
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

                        <div className = "box-body-fix">
                            <div className="user-name">
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

                            <div className="user-name">
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

                            <div className="user-name">
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

                    <div className="text-center">
                            <button className="button" input type="submit" value="Submit" > Cập nhật thông tin </button>
                    </div>    
                </div>
            </div>
        </div>
        );
      })}
    </div>
  );
}
