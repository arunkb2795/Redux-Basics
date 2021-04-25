import { createStore } from "redux";

const counterReducer = (state = { counter: 0, isShow: true }, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
      isShow: state.isShow,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
      isShow: state.isShow,
    };
  }
  if (action.type === "RESET") {
    return {
      counter: 0,
      isShow: state.isShow,
    };
  }
  if (action.type === "TOGGLE") {
    return {
      counter: state.counter,
      isShow: !state.isShow,
    };
  }
  if (action.type === "INCREASE") {
    return {
      counter: state.counter + parseInt(action.amount),
      isShow: state.isShow,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
