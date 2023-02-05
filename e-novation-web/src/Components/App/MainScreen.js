import Shower from "./Shower/Shower";
import MainNav from "./MainNav/MainNav";
import Profile from "./Profile/Profile";
import classes from "./MainScreen.module.css";
import TitleNav from "./TitleSideNav/TitleNav";

export default function MainScreen() {
  return (
    <div className={classes.main}>
      <Profile />

      <div className={classes.imageContainer}>
        <img src="images/logo.png" className={classes.mainLogo} />
      </div>

      <MainNav />
      <TitleNav />
      <Shower />
    </div>
  );
}
