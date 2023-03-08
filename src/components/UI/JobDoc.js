import YellowButton from "./YellowButton";
import classes from "./JobDoc.module.css";
// used for docs too
export default function JobCard({ title, text }) {
  return (
    <div className={classes.jobCardContainer}>
      <p className={classes.jobTitle}>{title}</p>
      <p className={classes.jobText}>{text}</p>
      <YellowButton text={"View"} />
    </div>
  );
}
