import { BackEndBaseURL } from "../../../app/backend";
import axios from "axios";
export async function getCustomerListForAdmin(id) {
  var c = await axios({
    method: "get",
    // url: BackEndBaseURL + "/api/users/get_by_coach",
    url: BackEndBaseURL + "/api/users",
    headers: {
      authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  })
    .then((res) => {
      if (res.status == 200) {
        var rs = [];
        for (var i = 0; i < res.data.result.length; i++) {
          if (res.data.result[i].coach == id) {
            rs.push(res.data.result[i]);
          }
        }
        return rs;
        //return res.data.result
      } else {
        return null;
      }
    })
    .catch((e) => {
      return null;
    });

  return c;
}


