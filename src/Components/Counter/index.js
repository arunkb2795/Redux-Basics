import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../../Redux/Store/counter";
export default function Counter() {
  //main advantage of using useSelector is
  //subscription to the store done automatically and update the state.
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.isShow);
  const dispatch = useDispatch();
  const [userValue, setUserValue] = useState(0);
  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handleReset = () => {
    dispatch(counterActions.reset());
  };
  const handleToggle = () => {
    dispatch(counterActions.toggle());
  };

  const handleInputChange = (e) => {
    setUserValue(e.target.value);
  };
  const handleIncrease = () => {
    console.log(userValue);
    dispatch(counterActions.increase(userValue));
  };
  return (
    <div>
      <h1>Redux Counter</h1>
      {show && <p>{counter}</p>}
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
      <button onClick={handleReset}>RESET</button>
      <input
        type="number"
        onChange={handleInputChange}
        value={userValue}
      ></input>
      <button onClick={handleIncrease}>INCREASED BY</button>
      <button onClick={handleToggle}>Toggle Counter</button>
    </div>
  );
}
