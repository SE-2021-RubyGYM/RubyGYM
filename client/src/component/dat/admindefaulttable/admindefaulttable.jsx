//read me!
// rq mean required for this component work without error
// props.headertable(array) mean header of table like : stt, ...  note! rq
// props.datatable(array of objects) mean data   note! rq
//
//
//
//
import { Link } from "react-router-dom";
import { Table } from "antd";
export default function AdminDefaultTable(props) {
  const fdataexploretable = (element, index) => {};
  return (
    <div style={{ width: "100%" }}>
      <table style={{ width: "100%" }}>
        <tr>
          {props.headertable.map((element, index) => {
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
                return <td>{element[key]}</td>;
              })}
              <td>
                {/* <Link to={"/admin/userprofile" + element["_id"]}> */}
                <Link to={"/admin/userprofile/" + element["_id"]}>
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
