import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BackEndBaseURL } from "../../app/backend";
export const customersSlice = createSlice({
  name: "customersList",
  initialState: {
    value: 0,
  },
  reducers: {
    getData: (state) => {
      axios({
        method: "GET",
        url: BackEndBaseURL + "/api/users/",
      }).then((res) => {
        state.value = res.data.result;
      });
    },

    setData: (state, action) => {},
    setDataWithID: (state) => {},
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
