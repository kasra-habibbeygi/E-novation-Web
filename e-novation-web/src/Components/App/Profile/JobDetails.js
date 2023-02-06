import classes from "./JobDetails.module.css";
import { Global } from "../../../constants/Global";
export default function JobDetails() {
  return (
    <div className={classes.jobContainer}>
      <div className={classes.jobBox}>
        <p className={classes.jobText}>your current jobs</p>
        <p className={classes.jobNumber}>{Global.user.openproject}</p>
      </div>
      <div className={classes.jobBox}>
        <p className={classes.jobText}>your all time jobs</p>
        <p className={classes.jobNumber}>{Global.user.allproject}</p>
      </div>
    </div>
  );
}
