import { useSelector } from "react-redux";
import Counter from "./Components/Counter";
import Login from "./Components/Login";
import UserProfile from "./Components/UserProfile";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div>
      <Counter />
      {!isAuthenticated && <Login />}
      <UserProfile />
    </div>
  );
}

export default App;
