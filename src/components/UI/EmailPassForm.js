import classes from "./EmailPassForm.module.css";
import { MdEmail } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { useContext, useEffect, useRef, useState } from "react";
import AuthAPI from "../../APIs/AuthAPI";
import AuthContext from "../../store/AuthContext";
import {
  emailValidation,
  passValidation,
  sizeValidation,
} from "../../utils/validation";
import { ValidationMassages } from "../../constants/Types";
import { useRouter } from "next/router";

// MdEmail;
function EmailPassForm({ ParentStyle }) {
  // variables
  const { setAuthRef } = useContext(AuthContext);
  const [passIsVisible, setPassVisible] = useState(false);
  const [invalidData, setInvalidData] = useState(true);
  const emailRef = useRef("");
  const passRef = useRef("");
  const [passNotValid, setPassNotValid] = useState(null);
  const [emailNotValid, setEmailNotValid] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (
      passNotValid === null &&
      emailNotValid === null &&
      passRef.current?.length !== 0 &&
      emailRef.current?.length !== 0
    ) {
      setInvalidData(false);
    } else {
      setInvalidData(true);
    }
  }, [passNotValid, emailNotValid]);

  // functions
  const handleChange = (event, reference) => {
    reference.current = event.target.value;
    if (event.target.type === "email") {
      if (sizeValidation(reference.current) !== null) {
        setEmailNotValid(sizeValidation(reference.current));
      } else if (emailValidation(reference.current) !== null) {
        setEmailNotValid(emailValidation(reference.current));
      } else {
        setEmailNotValid(null);
      }
    } else {
      if (sizeValidation(reference.current) !== null) {
        setPassNotValid(sizeValidation(reference.current));
      } else if (passValidation(reference.current) !== null) {
        setPassNotValid(passValidation(reference.current));
      } else {
        setPassNotValid(null);
      }
    }
  };

  const submitHandler = async (event, emailRef, passRef) => {
    setInvalidData(true);
    event.preventDefault();
    const response = await AuthAPI.Login({
      email: emailRef.current,
      pass: passRef.current,
    });
    console.log(response);
    if (response !== null) {
      setAuthRef(response);
      router.push("./home");
    } else {
      setPassNotValid(ValidationMassages.notFound);
      setEmailNotValid(ValidationMassages.notFound);
    }
  };

  const visibleHandler = function handler() {
    setPassVisible(!passIsVisible);
  };
  function textIsInvalid(massage) {
    return <p className={classes.invalidText}>{massage}</p>;
  }

  return (
    <form className={ParentStyle}>
      <label htmlFor="image" className={classes.imageLabel}>
        <img src="images/logo.png" className={classes.imageLogo} />
      </label>
      <div className={classes.inputContainer}>
        <MdEmail className={classes.inputIcon} />
        <input
          className={classes.input}
          type="email"
          id="FormEmail"
          name="FormEmail"
          placeholder="Email ID"
          onChange={(event) => {
            handleChange(event, emailRef);
          }}
        />
        {textIsInvalid(emailNotValid)}
      </div>
      <div className={classes.inputContainer}>
        <input
          className={classes.input}
          type={passIsVisible ? "text" : "password"}
          id="FormPassword"
          name="FormPassword"
          placeholder="password"
          onChange={(event) => {
            handleChange(event, passRef);
          }}
        />
        {textIsInvalid(passNotValid)}
        <div className={classes.twoIconContainer}>
          <RiLock2Fill className={classes.inputIcon} />
          {passIsVisible ? (
            <AiFillEyeInvisible
              className={classes.inputIconEye}
              onClick={visibleHandler}
            />
          ) : (
            <AiFillEye
              className={classes.inputIconEye}
              onClick={visibleHandler}
            />
          )}
        </div>
      </div>
      <input
        className={`${classes.input} ${classes.formButton} ${
          invalidData ? classes.buttonDisabled : null
        }`}
        type="submit"
        id="FormSubmit"
        name="FormSubmit"
        value="LOGIN"
        disabled={invalidData}
        onClick={(event) => {
          submitHandler(event, emailRef, passRef);
        }}
      />
    </form>
  );
}
export default EmailPassForm;
