import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BackEndBaseURL } from "../../app/backend";
export const customersSlice = createSlice({
  name: "customerList",
  initialState: {
    value: [
      {
        _id: "Đang tải",
        name: "Đang tải",
        gender: "Đang tải",
        phone: "Đang tải",
      },
    ],
  },
  reducers: {
    getDatas: (state) => {
      // axios({
      //   method: "GET",
      //   url: BackEndBaseURL + "/api/users/",
      // }).then((res) => {
      //   if (res.status == 200) {
      //     state.value = res.data.result;
      //   }
      // });
    },
  },
});
export const { getDatas } = customersSlice.actions;

export default customersSlice.reducer;
