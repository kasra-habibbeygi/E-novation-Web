import AuthAPI from "../../../APIs/AuthAPI";
import { Global } from "../../../constants/Global";
import { URLS } from "../../../constants/Types";
import classes from "./UserInterface.module.css";

export default function () {
  //   AuthAPI.Login({ email: "gmc@test.com", pass: "Gmc6000" });
  // console.log(Global?.user?.img);
  return (
    <div className={classes.interfaceContainer}>
      {/* <img src={`${URLS.BaseURL}${URLS.ProfileImage}${Global.user.img}`}></img> */}
      <img
        className={classes.userImage}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTU2fQ_VCPdrSaseCDEo_dTbhRo7_Kuoz5zQ&usqp=CAU"
      />
      <p className={classes.welcomeText}>Welcome GMC</p>
      <button className={classes.logout}>Log Out </button>
    </div>
  );
}
