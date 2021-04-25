import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, isShow: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
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

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
