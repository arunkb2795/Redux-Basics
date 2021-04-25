import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../Redux/Store/auth";
export default function UserProfile() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const handleLogoutClick = () => {
    dispatch(authActions.logout());
  };
  return (
    <div>
      {isAuthenticated && (
        <div>
          <h1>Welcome User your are logged in</h1>
          <button onClick={handleLogoutClick}>Logout</button>
        </div>
      )}
    </div>
  );
}
