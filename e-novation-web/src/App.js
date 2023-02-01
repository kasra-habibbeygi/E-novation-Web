import logo from "./logo.svg";
import "./App.css";
import Auth from "./Components/AuthComponents/Auth";
import { useEffect, useRef, useState } from "react";
import AuthContext from "./store/AuthContext";
import { Global } from "./constants/Global";
import MainScreen from "./Components/App/MainScreen";

function App() {
  const [authRef, setAuthRef] = useState(false);
  useEffect(() => {
    const cash = localStorage.getItem("user");
    if (cash !== null) {
      setAuthRef(cash);
      Global.user = JSON.parse(cash);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ authRef, setAuthRef }}>
      {authRef ? (
        <MainScreen />
      ) : (
        <div className="App">
          <Auth />
        </div>
      )}
    </AuthContext.Provider>
  );
}

export default App;
