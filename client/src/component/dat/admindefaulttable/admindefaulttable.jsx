//read me!
// rq mean required for this component work without error
// props.headertable(array) mean header of table like : stt, ...  note! rq
// props.datatable(array of objects) mean data   note! rq
//
//
//
//
// 0: id,
// 1: name,
// 2: username,
// 3:phone,
// 4:password,
// 5: birthDay,
// 6: gender,
// 7: referalcode,

import { Link } from "react-router-dom";
import { Table } from "antd";
import { getRenderPropValue } from "antd/lib/_util/getRenderPropValue";
export default function AdminDefaultTable(props) {
  const fdataexploretable = (element, index) => {};
  return (
    <div style={{ width: "100%" }}>
      <table style={{ width: "100%" }}>
        <tr>
          {props.headertable.map((element, index) => {
            // if (index != 4) return <th>{element}</th>;
            return <th>{element}</th>;
          })}
        </tr>
        {props.datatable.map((element, index) => {
          return (
            <tr>
              {Object.keys(element).map((key, index) => {
                if (key == "birthDay") {
                  const date = new Date(element[key]);
                  const birthday =
                    "" +
                    date.getFullYear() +
                    "/" +
                    (date.getMonth() + 1) +
                    "/" +
                    date.getDate();
                  // const date= new Date(Date.UTC(birthday.getFullYear(),birthday.getMonth(), birthday.getDate()));
                  return <td>{birthday}</td>;
                }
                // if (index1 != 4) return <td>{element[key]}</td>;
                return <td>{element[key]}</td>;
              })}
              <td>
                {/* <Link to={"/admin/userprofile/" + element["_id"]}>
                  Xem chi tiet
                </Link> */}
                {/* <Link to={"/admin/userprofile/" + element["_id"]}> */}
                <Link to={"/admin/" + props.function + element["_id"]}>
                  Xem chi tiet
                </Link>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
