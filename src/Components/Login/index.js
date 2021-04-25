import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../Redux/Store";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLoginClick = () => {
    dispatch(authActions.login());
  };

  return (
    <div>
      <label>email : </label>
      <input type="text" value={email} onChange={handleEmailChange}></input>
      <label>Password : </label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
      ></input>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
}
