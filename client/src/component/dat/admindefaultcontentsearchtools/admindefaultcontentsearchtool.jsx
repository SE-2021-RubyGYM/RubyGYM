import { useState } from "react";
import { Input, Button } from "antd";
//read me
/// props.name1 is name of the searchtools
/// props.name2 is name of what u wanna add ex: them user, them bai viet ...
/// props.name3 is name of url to function props.name2
///
export default function AdminDefaultContentSearchTool(props) {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const onhoverBackGroundColor = "rgb(68, 180, 46)";
  const backGroundColor = "rgba(63, 121, 52, 0.89)";
  const [hover, setHover] = useState([backGroundColor, backGroundColor]);
  const onHoverButton = (index) => {
    const newHover = [...hover];
    newHover[index] =
      newHover[index] == backGroundColor
        ? onhoverBackGroundColor
        : backGroundColor;
    setHover(newHover);
  };
  return (
    <div style={{ width: "100%", paddingLeft: "10px", paddingTop: "20px" }}>
      <div style={{ display: "inline-block" }}>
        <div
          style={{
            fontFamily: "'Source Sans Pro', sans-serif",
            fontWeight: "500",
            fontSize: "18px",
            boxSizing: "border-box",
            display: "inline-block",
            marginRight: "5px",
            marginBottom: "10px",
          }}
        >
          {props.name1}
        </div>
        {/* <input
          style={{
            fontFamily: "'Source Sans Pro', sans-serif",
            borderRadius: "5px",
            border: "2px solid rgb(175, 175, 175)",
            paddingLeft: "5px",
          }}
          type="text"
          placeholder={props.name1}
        /> */}

        <Search
          type="text"
          placeholder={props.name1}
          onSearch={onSearch}
          enterButton
          onMouseEnter={() => onHoverButton(0)}
          onMouseLeave={() => onHoverButton(0)}
        />
      </div>
      {/* <div style={{ display: "inline-block", marginLeft: "10px" }}>
        <button
          style={{
            position: "relative",
            backgroundColor: hover[0],
            color: "rgb(255, 232, 232)",
            textAlign: "center",
            width: "80px",
            height: "30px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onMouseEnter={() => onHoverButton(0)}
          onMouseLeave={() => onHoverButton(0)}
        >
          Tìm kiếm
        </button>
      </div> */}
      <div
        style={{
          float: "right",
          width: "200px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ marginLeft: "20px" }}>
          {/* <button
            style={{
              backgroundColor: hover[1],
              color: "rgb(255, 232, 232)",
              textAlign: "center",
              paddingLeft: "5px",
              paddingRight: "5px",
              height: "30px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={() => {
              window.open(props.name3, "_self");
            }}
            onMouseEnter={() => onHoverButton(1)}
            onMouseLeave={() => onHoverButton(1)}
          >
            {props.name2}
          </button> */}
          <Button
            type="primary"
            onClick={() => {
              window.open(props.name3, "_self");
            }}
            onMouseEnter={() => onHoverButton(1)}
            onMouseLeave={() => onHoverButton(1)}
          >
            {props.name2}
          </Button>
        </div>
        <div
          style={{
            paddingRight: "20px",
            float: "right",
            marginTop: "4px",
            borderRadius: "50%",
          }}
        >
          <img
            style={{ height: "22px", borderRadius: "50%", cursor: "pointer" }}
            src="https://cdn-icons.flaticon.com/png/128/2040/premium/2040504.png?token=exp=1637698397~hmac=a27326feb11e6978bb38a61d1a6e80e9"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
