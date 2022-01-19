import { BackEndBaseURL } from "../../../app/backend";
import axios from "axios";
export async function getCustomerList(id) {
  var c = await axios({
    method: "get",
    url: BackEndBaseURL + "/api/users/get_by_coach",
    // url: BackEndBaseURL + "/api/users",
    headers: {
      authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  })
    .then((res) => {
      if (res.status == 200) {
        // var rs = [];
        // for (var i = 0; i < res.data.result.length; i++) {
        //   if (res.data.result[i].coach == id) {
        //     rs.push(res.data.result[i]);
        //   }
        // }
        // return rs;
        return res.data.result;
      } else {
        return null;
      }
    })
    .catch((e) => {
      return null;
    });

  return c;
}

// export const deleteCustomerById = async (id) => {
//   var result = await axios({
//     method: "DELETE",
//     url: BackEndBaseURL + "/api/users/" + id,
//   })
//     .then((res) => {
//       if (res.status == 200) {
//         return true;
//       } else {
//         return false;
//       }
//     })
//     .catch((e) => {
//       return false;
//     });

//   return result;
// };

// export const createUser = async (user) => {
//   var result = await axios({
//     method: "POST",
//     url: BackEndBaseURL + "/api/users",
//     data: user,
//   })
//     .then((res) => {
//       if (res.status == 200 || res.status == true) {
//         return true;
//       } else {
//         return false;
//       }
//     })
//     .catch((e) => {
//       return false;
//     });
//   return result;
// };
