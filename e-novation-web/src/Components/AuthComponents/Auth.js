import classes from "./Auth.module.css";
import Form, * as EmailPassForm from "../UI/EmailPassForm";
function Auth() {
  return (
    <div className={classes.Auth}>
      <img src="images/authSidePicture.jpg" className={classes.AuthImage} />
      <Form ParentStyle={classes.AuthForm} />
    </div>
  );
}
export default Auth;
