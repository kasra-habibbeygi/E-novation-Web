import { Global } from "@/constants/Global";
import { URLS } from "@/constants/Types";
import AuthContext from "@/store/AuthContext";
import { useContext } from "react";
// import AuthAPI from "../../../APIs/AuthAPI";
import classes from "./UserInterface.module.css";

export default function () {
  const { setAuthRef } = useContext(AuthContext);
  let profileImage =
    Global?.user?.img !== undefined && Global.user.img !== ""
      ? Global?.user?.img
      : URLS?.alternativeImageURL;
  //   AuthAPI.Login({ email: "gmc@test.com", pass: "Gmc6000" });
  // console.log(Global?.user?.img);
  const logOutHandler = () => {
    localStorage.removeItem("user");
    setAuthRef(false);
  };
  return (
    <div className={classes.interfaceContainer}>
      <img className={classes.userImage} src={profileImage} />
      <p className={classes.welcomeText}>Welcome GMC</p>
      <button className={classes.logout} onClick={logOutHandler}>
        Log Out
      </button>
    </div>
  );
}
