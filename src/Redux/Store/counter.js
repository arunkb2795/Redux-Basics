import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, isShow: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    reset(state) {
      state.counter = 0;
    },
    increase(state, action) {
      state.counter = state.counter + parseInt(action.payload);
    },
    toggle(state) {
      state.isShow = !state.isShow;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
