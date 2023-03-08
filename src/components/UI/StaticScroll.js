import { useEffect, useRef, useState } from "react";
import classes from "./StaticScroll.module.css";

export default function StaticScroll({ totalAmount = 1, fillAmount = 1 }) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  // const [fill,setFill] = useState(0)
  let fill = 0;
  fill = (height / totalAmount) * fillAmount;
  console.log(fill);
  console.log(ref);

  useEffect(() => {
    if (ref.current !== null) {
      setHeight(ref.current.clientHeight);
    }
  }, [ref.current]);
  return (
    <div className={classes.container} ref={ref}>
      <div className={classes.filler} style={{ height: fill }}></div>
    </div>
  );
}
