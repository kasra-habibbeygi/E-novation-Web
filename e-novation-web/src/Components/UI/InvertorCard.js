import classes from "./InvertorCard.module.css";

export default function InvertorCard() {
  return (
    <div className={classes.container}>
      <p>invertor</p>
      <div className={classes.dataBox}>
        <p>{`ID No.: 123456`}</p>
        <p>{`Patent No.: 123456`}</p>
        <p>{`Req. No.: 123456`}</p>
        <p>{`Order No.:12`}</p>
        <p>{`Patent No: 123456`}</p>
        <p>{`End Date:2022/ 3/12`}</p>
      </div>
    </div>
  );
}
