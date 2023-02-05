import classes from "./JobDetails.module.css";

export default function JobDetails() {
  return (
    <div className={classes.jobContainer}>
      <div className={classes.jobBox}>
        <p className={classes.jobText}>your current jobs</p>
        <p className={classes.jobNumber}>1</p>
      </div>
      <div className={classes.jobBox}>
        <p className={classes.jobText}>your all time jobs</p>
        <p className={classes.jobNumber}>2</p>
      </div>
    </div>
  );
}
