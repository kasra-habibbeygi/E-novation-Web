import { Global } from "@/constants/Global";
import AuthContext from "@/store/AuthContext";
import { useEffect, useState } from "react";
import "./Global.css";

function MyApp({ Component, pageProps }) {
  const [authRef, setAuthRef] = useState(false);
  console.log("app js global", Global);
  useEffect(() => {
    const cash = localStorage.getItem("user");
    if (Global?.user !== undefined) {
      console.log("global evaluted in appjs");
    }
    if (cash !== null) {
      setAuthRef(cash);
      Global.user = JSON.parse(cash);
    }
  }, []);
  return (
    // <Layout>
    <AuthContext.Provider value={{ authRef, setAuthRef }}>
      <Component {...pageProps} />
    </AuthContext.Provider>

    // </Layout>
  );
}

export default MyApp;
