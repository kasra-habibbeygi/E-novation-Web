import { BsBellFill } from "react-icons/bs";
import classes from "./JobCard.module.css";

export default function JobCard({ title }) {
  return (
    <div className={classes.container}>
      <p className={classes.title}>{title}</p>
      <BsBellFill className={classes.bell} />
    </div>
  );
}
