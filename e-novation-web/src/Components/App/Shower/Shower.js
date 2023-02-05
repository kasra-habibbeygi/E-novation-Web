import { useEffect, useState } from "react";
import JobAPI from "../../../APIs/JobAPI";
import { Global } from "../../../constants/Global";
import InvertorCard from "../../UI/InvertorCard";
import JobCard from "../../UI/JobCard";
import classes from "./Shower.module.css";
const testArray = [
  { title: "Victoria Car Platform" },
  { title: "Victoria Car Platform" },
  { title: "Victoria Car Platform" },
  { title: "Victoria Car Platform" },
  { title: "Victoria Car Platform" },
  { title: "Victoria Car Platform" },
  { title: "Victoria Car Platform" },
];
const testArray3 = [
  {
    title: "Doc",
    text: "some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text",
  },
  {
    title: "Doc",
    text: "some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text",
  },
  {
    title: "Doc",
    text: "some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text",
  },
  {
    title: "Doc",
    text: "some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text",
  },
  {
    title: "Doc",
    text: "some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text",
  },
  {
    title: "Doc",
    text: "some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text",
  },
  {
    title: "Doc",
    text: "some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text",
  },
];

export const JobCards = ({ details }) => {
  console.log(details);
  return (
    <div className={classes.showerContainer}>
      {details?.map((item) => {
        return <JobCard title={item.name} alarm={item.alarm} />;
      })}
    </div>
  );
};

export const JobDocs = () => {
  return (
    <div className={classes.showerContainer}>
      {testArray3.map((item) => {
        return <JobDocs title={item.title} text={item.text} />;
      })}
    </div>
  );
};

export const Invertors = () => {
  return (
    <div className={classes.showerContainer}>
      {testArray.map(() => {
        return <InvertorCard />;
      })}
    </div>
  );
};

export default function Shower() {
  const [jobDetails, setJobDetails] = useState(null);
  useEffect(() => {
    console.log("api is calling");
    let fetchJobs = async () => {
      let response = await JobAPI.getJobs(Global.user.token);
      setJobDetails(await response);
    };
    fetchJobs();
  }, []);
  console.log(jobDetails);
  return <JobCards details={jobDetails} />;
}
