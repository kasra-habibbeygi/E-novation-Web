import TitleDetailNav from "./TitleDetailNav";
import classes from "./TitleNav.module.css";
const testArray2 = [
  { title: "Current Jobs" },
  { title: "Victoria Car Platform" },
];
const testArray3 = [{ title: "History" }];

export default function TitleNav() {
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        {testArray2.map((item, index) => {
          let dynamicClass;
          switch (index) {
            case 0:
              dynamicClass = classes.title0;
              break;
            case 1:
              dynamicClass = classes.title1;
              break;
            case 2:
              dynamicClass = classes.title2;
              break;
            default:
              dynamicClass = classes.title2;
          }
          return (
            <a
              className={`${classes.title} ${dynamicClass}`}
              key={`${index}${item.title}`}
            >
              {item.title}
            </a>
          );
        })}
      </div>
      <TitleDetailNav />
    </div>
  );
}
