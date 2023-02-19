import classes from "./Auth.module.css";
import Form, * as EmailPassForm from "../../components/UI/EmailPassForm";

export default function AuthPage() {
  console.log("auth page rendred");
  return (
    <div className={classes.Auth}>
      <img src="images/authSidePicture.jpg" className={classes.AuthImage} />
      <Form ParentStyle={classes.AuthForm} />
    </div>
  );
}
