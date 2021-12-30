import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Input, Button } from "antd";
import { Select } from "antd";
const { Option } = Select;
export default function AdminEditCoachForm(props) {
  const [dataForm, setDataForm] = useState(props.data);
  const [arrayToRender, setArrayToRender] = useState(props.data); // data

  const handleInputFieldOnChange = (value, index) => {
    var newDataForm = [...dataForm];
    if (index < 0) return;
    if (index >= newDataForm.length) return;
    newDataForm[index].value = value;
    setDataForm(newDataForm);
    // alert(value)
  };

  const inputField = (title, index) => {
    return (
      <div>
        <div>{title}</div>
        <div>
          <Input
            style={{ width: "20%" }}
            type="text"
            onChange={(e) => handleInputFieldOnChange(e.target.value, index)}
          />
        </div>
      </div>
    );
  };
  const handleChange = (newValue) => {};
  const handleSubmit = () => {
    console.log(getValueByTitleE("major"));
    axios({
      method: "post",
      url: "http://localhost:5000/api/coachs/",
      data: {
        name: getValueByTitleE("name"),
        phone: getValueByTitleE("phone"),
        username: getValueByTitleE("username"),
        password: getValueByTitleE("password"),
        // paymentDay: getValueByTitleE("paymentDay"),
        birthDay: getValueByTitleE("birthDay"),
        major: getValueByTitleE("major"),
        // gender: getValueByTitleE("gender"),
        // coach:getValueByTitleE('coach'),
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
    // alert(getValueByTitleE("name"));
    
  };

  const buttonField = (title) => {
    return (
      <div style={{ marginTop: "20px" }}>
        <Link to="/admin/registeraccforcoach">
          <Button onClick={() => handleSubmit()}>{title}</Button>
        </Link>
      </div>
    );
  };

  const getValueByTitleE = (titleE) => {
    for (var i = 0; i < dataForm.length; i++) {
      if (dataForm[i].titleE == titleE) {
        return dataForm[i].value;
      }
    }
    return "";
  };

  return (
    <div>
      <div>
        {arrayToRender.map((element, index) => {
          if (element.type == "inputField") {
            return inputField(element.title, index);
          } else {
            if (element.type == "buttonField") {
              return buttonField(element.title);
            } else {
              if (element.type == "dropdown") {
                return (
                  <>
                    <div>Vai trò </div>
                    <Select
                      defaultValue="Huấn luyện cá nhân"
                      style={{ width: 320 }}
                      onChange={(e) => handleInputFieldOnChange(e, index)}
                      // onChange={(e) => console.log(e)}
                    >
                      <Option value="LesMills">LesMills</Option>
                      <Option value="Yoga">Yoga</Option>
                      <Option value="Dance">Dance</Option>
                      <Option value="Huấn luyện cá nhân">
                        Huấn luyện cá nhân
                      </Option>
                      <Option value="Kickfit/MMA">Kickfit/MMA</Option>
                      <Option value="Group Fitness"> Group Fitness</Option>
                    </Select>
                  </>

                  // enum: ['LesMills', 'Yoga', 'Dance', 'Huấn luyện cá nhân', 'Kickfit/MMA', 'Group Fitness']
                );
              }
            }
          }
        })}
      </div>
    </div>
  );
}
