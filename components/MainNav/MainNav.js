import classes from "./MainNav.module.css";
import { HiHome } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";
export default function MainNav() {
  const clickHandler = (e) => {
    e.preventDefault();
  };
  return (
    <ul className={classes.mainNav}>
      <li className={classes.item}>
        <a className={classes.anchor} onClick={clickHandler}>
          <HiHome className={classes.icon} />
        </a>
      </li>
      <li className={classes.item}>
        <a className={classes.anchor} onClick={clickHandler}>
          <IoIosMail className={classes.icon} />
        </a>
      </li>
      <li className={classes.item}>
        <a className={classes.anchor} onClick={clickHandler}>
          <BsFillPersonFill className={classes.icon} />
        </a>
      </li>
    </ul>
  );
}
