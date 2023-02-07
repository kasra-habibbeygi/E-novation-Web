import { GiNotebook } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import classes from "./ProgressCard.module.css";

export default function ProgressCard({ title, state = 1 }) {
  return (
    <div
      className={`${classes.container} ${
        state === 2 ? classes.bgBlue : classes.bgWhite
      }`}
    >
      {state === 1 ? (
        <GiNotebook className={classes.done} />
      ) : state === 2 ? (
        <FaShippingFast className={classes.inProgress} />
      ) : (
        <GiNotebook className={classes.notStarted} />
      )}
      <p className={classes.title}>{title}</p>
    </div>
  );
}
