import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Input, Button } from "antd";

export default function AdminEditUserForm(props) {
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

  const handleSubmit = () => {
    axios({
      method: "post",
      url: "http://localhost:5000/api/users/",
      data: {
        name: getValueByTitleE("name"),
        phone: getValueByTitleE("phone"),
        username: getValueByTitleE("username"),
        password: getValueByTitleE("password"),
        paymentDay: getValueByTitleE("paymentDay"),
        birthDay: getValueByTitleE("birthDay"),
        gender: getValueByTitleE("gender"),
        // coach:getValueByTitleE('coach'),
      },
    })
      .then((res) => {
        alert("Thêm thành công");
      })
      .catch((res) => {
        alert("Thêm không thành công");
        console.log(res);
      });
    // alert(getValueByTitleE("name"));
  };

  const buttonField = (title) => {
    return (
      <div style={{ marginTop: "20px" }}>
        <Link to="/admin/registeraccforuser">
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
            }
          }
        })}
      </div>
    </div>
  );
}
