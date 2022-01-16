import axios from "axios";
import { BackEndBaseURL } from "../../../app/backend";

export const CoachLoginApi = async (value) => {
  var result = await axios({
    method: "post",
    url: BackEndBaseURL + "/api/coachs/login",
    data: value,
  })
    .then((res) => {
      console.log(res);
      if (res.status == 200 || res.status == true) {
        return true;
      }
      return false;
    })
    .catch((e) => {
      return false;
    });
  console.log(result);
  return result;
};

export const AdminLoginApi = async (value) => {
  var result = await axios({
    method: "post",
    url: BackEndBaseURL + "/api/admins/login",
    data: value,
  })
    .then((res) => {
      if (res.status == 200 || res.status == true) {
        return true;
      }
      return false;
    })
    .catch((e) => {
      return false;
    });

  return result;
};
