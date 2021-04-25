import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
export default function Counter() {
  //main advantage of using useSelector is
  //subscription to the store done automatically and update the state.
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.isShow);
  const dispatch = useDispatch();
  const [userValue, setUserValue] = useState(0);
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const handleReset = () => {
    dispatch({ type: "RESET" });
  };
  const handleToggle = () => {
    dispatch({ type: "TOGGLE" });
  };

  const handleInputChange = (e) => {
    setUserValue(e.target.value);
  };
  const handleIncrease = () => {
    console.log(userValue);
    dispatch({ type: "INCREASE", amount: userValue });
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
