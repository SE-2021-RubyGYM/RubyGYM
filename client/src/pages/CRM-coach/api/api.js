import { BackEndBaseURL } from "../../../app/backend";
import axios from "axios";
export async function getCoachList() {
  var c = await axios({
    method: "get",
    url: BackEndBaseURL + "/api/coachs",
  })
    .then((res) => {
      if (res.status == 200) {
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

export const deleteCoachById = async (id) => {
  var result = await axios({
    method: "DELETE",
    url: BackEndBaseURL + "/api/coachs/" + id,
  })
    .then((res) => {
      if (res.status == 200) {
        return true;
      } else {
        return false;
      }
    })
    .catch((e) => {
      return false;
    });

  return result;
};

export const createHLV = async (coach) => {
  var result = await axios({
    method: "POST",
    url: BackEndBaseURL + "/api/coachs",
    data: coach,
  })
    .then((res) => {
      console.log(res);
      
      if (res.status == 200 || res.status == true) {
        
        return true;
      } else {
        return false;
      }
    })
    .catch((e) => {
      return false;
    });
  return result;
};
