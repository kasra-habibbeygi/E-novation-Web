import classes from "./TitleDetailNav.module.css";
export default function TitleDetailNav() {
  return (
    <ul className={classes.container}>
      <li className={classes.item}>Photo Album</li>
      <li className={classes.item}>Job Progress</li>
      <li className={classes.item}>Documents</li>
    </ul>
  );
}
