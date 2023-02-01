import RightSideNav from "./RightSideNav/RightSideNav";
import Shower from "./Shower/Shower";
import TopSideNav from "./TopSideNav/TopSideNav";
import Profile from "./Profile/Profile";
import classes from "./MainScreen.module.css";

export default function MainScreen() {
  return (
    <div className={classes.main}>
      <Profile />

      <div className={classes.imageContainer}>
        <img src="images/logo.png" className={classes.mainLogo} />
      </div>

      <RightSideNav />
      <TopSideNav />
      <Shower />
    </div>
  );
}
