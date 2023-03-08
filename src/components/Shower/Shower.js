import JobAPI from '@/APIs/JobAPI';
import { Global } from '@/constants/Global';
import { useEffect, useState } from 'react';
import ProgressCard from '../UI/ProgressCard';
import StaticScroll from '../UI/StaticScroll';
import InvertorCard from '../UI/InvertorCard';
import JobCard from '../UI/JobCard';

import classes from './Shower.module.css';
const testArray = [
    { title: 'Victoria Car Platform' },
    { title: 'Victoria Car Platform' },
    { title: 'Victoria Car Platform' },
    { title: 'Victoria Car Platform' },
    { title: 'Victoria Car Platform' },
    { title: 'Victoria Car Platform' },
    { title: 'Victoria Car Platform' }
];
const testArray3 = [
    {
        title: 'Doc',
        text: 'some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text'
    },
    {
        title: 'Doc',
        text: 'some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text'
    },
    {
        title: 'Doc',
        text: 'some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text'
    },
    {
        title: 'Doc',
        text: 'some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text'
    },
    {
        title: 'Doc',
        text: 'some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text'
    },
    {
        title: 'Doc',
        text: 'some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text'
    },
    {
        title: 'Doc',
        text: 'some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text some dummy text'
    }
];

export const JobCards = ({ details }) => {
    return (
        <div className={classes.showerContainer}>
            {details?.map(item => {
                return <JobCard title={item.name} alarm={item.alarm} key={item.id} />;
            })}
        </div>
    );
};

export const JobDocs = () => {
    return (
        <div className={classes.showerContainer}>
            {testArray3.map(item => {
                return <JobDocs title={item.title} text={item.text} />;
            })}
        </div>
    );
};

const progressTest = [
    { title: 'bla bla bla', state: 1 },
    { title: 'bla bla bla', state: 2 },
    { title: 'bla bla bla', state: 3 },
    { title: 'bla bla bla', state: 3 },
    { title: 'bla bla bla', state: 3 },
    { title: 'bla bla bla', state: 3 },
    { title: 'bla bla bla', state: 3 },
    { title: 'bla bla bla', state: 3 },
    { title: 'bla bla bla', state: 3 }
];
const infoTest = [{ title: 'some dummy text' }, { title: 'some dummy text' }, { title: 'some dummy text' }, { title: 'some dummy text' }];

export const Invertors = () => {
    return (
        <div className={classes.showerContainer}>
            {testArray.map(() => {
                return <InvertorCard />;
            })}
        </div>
    );
};

export const JobProgress = () => {
    let totalState = 0;
    for (let i = 0; i < progressTest.length; i++) {
        if (progressTest[i].state !== 3) {
            totalState++;
        } else {
            break;
        }
    }
    return (
        <div className={classes.showerContainer}>
            <div className={classes.progressLeftSideContainer}>
                <StaticScroll fillAmount={totalState} totalAmount={progressTest.length} />
                <div className={classes.progressCardContainer}>
                    {progressTest.map((item, index) => {
                        return <ProgressCard title={item.title} state={item.state} />;
                    })}
                </div>
            </div>
            <div className={classes.progressRightSideContainer}>
                <p className={classes.progressInfoTitle}>Project info</p>
                {infoTest.map((item, index) => {
                    return <p className={classes.progressInfoes}>{item.title}</p>;
                })}
            </div>
        </div>
    );
};

export default function Shower() {
    const [jobDetails, setJobDetails] = useState(null);
    useEffect(() => {
        let fetchJobs = async () => {
            let response = await JobAPI.getJobs(Global?.user?.token);
            setJobDetails(await response);
        };
        fetchJobs();
    }, []);
    return <JobProgress />;
}
