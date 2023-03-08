import classes from "./YellowButton.module.css";

export default function YellowButton({ text, style }) {
  const clickHandler = (e) => {
    e.preventDefault();
  };
  return (
    <a className={classes.yellowButton} onClick={clickHandler}>
      {text}
    </a>
  );
}
