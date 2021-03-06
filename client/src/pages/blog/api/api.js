import { BackEndBaseURL } from "../../../app/backend";
import axios from "axios";
export async function getAdvList() {
  var c = await axios({
    method: "get",
    url: BackEndBaseURL + "/api/adv",
  })
    .then((res) => {
      if (res.status == 200 || res.status == true) {
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

export const deleteBlogById = async (id) => {
  var result = await axios({
    method: "DELETE",
    url: BackEndBaseURL + "/api/adv/" + id,
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

export const createUser = async (user) => {
  var result = await axios({
    method: "POST",
    url: BackEndBaseURL + "/api/users",
    data: user,
  })
    .then((res) => {
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
