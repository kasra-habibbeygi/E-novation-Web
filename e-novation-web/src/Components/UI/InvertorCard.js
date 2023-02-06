import classes from "./InvertorCard.module.css";

export default function InvertorCard() {
  return (
    <div className={classes.container}>
      <p className={classes.invertor}>invertor</p>
      <div className={classes.dataBox}>
        <p className={[classes.dataTitle]}>
          ID No.: <span className={[classes.data]}>123456</span>
        </p>
        <p className={[classes.dataTitle]}>
          Patent No.: <span className={[classes.data]}>123456</span>
        </p>
        <p className={[classes.dataTitle]}>
          Req. No.: <span className={[classes.data]}>123456</span>
        </p>
        <p className={[classes.dataTitle]}>
          Order No.: <span className={[classes.data]}>12</span>
        </p>
        <p className={[classes.dataTitle]}>
          Patent No: <span className={[classes.data]}>123456</span>
        </p>
        <p className={[classes.dataTitle]}>
          End Date: <span className={[classes.data]}>2022/ 3/12</span>
        </p>
      </div>
    </div>
  );
}
