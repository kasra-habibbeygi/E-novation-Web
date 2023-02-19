import { BsBellFill } from "react-icons/bs";
import classes from "./JobCard.module.css";

export default function JobCard({ title, alarm }) {
  return (
    <div className={classes.container}>
      <p className={classes.title}>{title}</p>
      <BsBellFill className={alarm ? classes.alarmed : classes.notAlarmed} />
    </div>
  );
}
