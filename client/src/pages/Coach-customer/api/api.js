import { BackEndBaseURL } from "../../../app/backend";
import axios from "axios";
import { toast } from "react-toastify";
import { Notification2 } from "../../../components/Notification/Notification";
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
        console.log("thanh cong")
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

export const submitAssessment = async(id, assessment)=> {
  
  var result = await axios({
    method: "PUT",
    url: BackEndBaseURL + "/api/users/"+ id,
    data: assessment,
     headers: {
      authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  })
    .then((res) => {
      if (res.status == 200 || res.status == true) {
        const notificationTypes = ["success", "error"];
          var success = true;
          var mes = "Gửi đánh giá thành công";
          let notificationName = success ? "success" : "error";
          let msg = { success: mes, error: mes };
          toast(
            <Notification2
              type={notificationName}
              withIcon
              msg={msg[notificationName]}
            />,
            {
              autoClose: 4000,
              closeButton: false,
              hideProgressBar: true,
            }
          );

        console.log({assessment});
        return true;
      } else {
        return false;
      }
      
    })
    .catch((e) => {
      const notificationTypes = ["success", "error"];
        var success = false;
        var mes = "Gửi đánh giá thất bại";
        let notificationName = success ? "success" : "error";
        let msg = { success: mes, error: mes };
        toast(
          <Notification2
            type={notificationName}
            withIcon
            msg={msg[notificationName]}
          />,
          {
            autoClose: 4000,
            closeButton: false,
            hideProgressBar: true,
          }
        );
      console.log(e);
      return false;
    });
  return result;
};



//  const handleSubmit = () => {
//     var userInfoCopy = { ...userInfo };
//     userInfoCopy.paymentDay = datePicker.toString();

//     axios({
//       method: "PUT",
//       url: BackEndBaseURL + "/api/users/" + id,
//       data: userInfoCopy,
//     })
//       .then((res) => {
//         if (res.status == 200 || res.status == true) {
//           const notificationTypes = ["success", "error"];
//           var success = true;
//           var mes = "Cập nhập thành công";
//           let notificationName = success ? "success" : "error";
//           let msg = { success: mes, error: mes };
//           toast(
//             <Notification2
//               type={notificationName}
//               withIcon
//               msg={msg[notificationName]}
//             />,
//             {
//               autoClose: 4000,
//               closeButton: false,
//               hideProgressBar: true,
//             }
//           );
//         } else {
//           const notificationTypes = ["success", "error"];
//           var success = false;
//           var mes = "Cập nhập thất bại";
//           let notificationName = success ? "success" : "error";
//           let msg = { success: mes, error: mes };
//           toast(
//             <Notification2
//               type={notificationName}
//               withIcon
//               msg={msg[notificationName]}
//             />,
//             {
//               autoClose: 4000,
//               closeButton: false,
//               hideProgressBar: true,
//             }
//           );
//         }
//       })
//       .catch((e) => {
//         const notificationTypes = ["success", "error"];
//         var success = false;
//         var mes = "Cập nhập thất bại";
//         let notificationName = success ? "success" : "error";
//         let msg = { success: mes, error: mes };
//         toast(
//           <Notification2
//             type={notificationName}
//             withIcon
//             msg={msg[notificationName]}
//           />,
//           {
//             autoClose: 4000,
//             closeButton: false,
//             hideProgressBar: true,
//           }
//         );
//       });
//   };