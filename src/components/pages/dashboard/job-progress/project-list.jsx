import Image from 'next/image';

// Component
import CardSkeleton from '@/src/components/skeleton/card';

// Assets
import { MainField } from './project-list.style';

import BoxGray from '@/src/assets/images/jobs-icon/box0.png';
import Boxyellow from '@/src/assets/images/jobs-icon/box1.png';
import BoxDarkYellow from '@/src/assets/images/jobs-icon/box2.png';

import cutGray from '@/src/assets/images/jobs-icon/cut0.png';
import cutyellow from '@/src/assets/images/jobs-icon/cut1.png';
import cutDarkYellow from '@/src/assets/images/jobs-icon/cut2.png';

import docGray from '@/src/assets/images/jobs-icon/doc0.png';
import docyellow from '@/src/assets/images/jobs-icon/doc1.png';
import docDarkYellow from '@/src/assets/images/jobs-icon/doc2.png';

import dollarGray from '@/src/assets/images/jobs-icon/dollar0.png';
import dollaryellow from '@/src/assets/images/jobs-icon/dollar1.png';
import dollarDarkYellow from '@/src/assets/images/jobs-icon/dollar2.png';

import drillGray from '@/src/assets/images/jobs-icon/drill0.png';
import drillyellow from '@/src/assets/images/jobs-icon/drill1.png';
import drillDarkYellow from '@/src/assets/images/jobs-icon/drill2.png';

import heatingGray from '@/src/assets/images/jobs-icon/heating0.png';
import heatingyellow from '@/src/assets/images/jobs-icon/heating1.png';
import heatingDarkYellow from '@/src/assets/images/jobs-icon/heating2.png';

import liftGray from '@/src/assets/images/jobs-icon/lift0.png';
import liftyellow from '@/src/assets/images/jobs-icon/lift1.png';
import liftDarkYellow from '@/src/assets/images/jobs-icon/lift2.png';

import tickGray from '@/src/assets/images/jobs-icon/tick0.png';
import tickyellow from '@/src/assets/images/jobs-icon/tick1.png';
import tickDarkYellow from '@/src/assets/images/jobs-icon/tick2.png';

import truckGray from '@/src/assets/images/jobs-icon/truck0.png';
import truckyellow from '@/src/assets/images/jobs-icon/truck1.png';
import truckDarkYellow from '@/src/assets/images/jobs-icon/truck2.png';

const ImageHandler = (name, color) => {
    let imgName = '';

    if (name === 'box' && color === 'gray') {
        imgName = BoxGray;
    } else if (name === 'box' && color === 'yellow') {
        imgName = Boxyellow;
    } else if (name === 'box' && color === 'darkYellow') {
        imgName = BoxDarkYellow;
    } else if (name === 'cut' && color === 'gray') {
        imgName = cutGray;
    } else if (name === 'cut' && color === 'yellow') {
        imgName = cutyellow;
    } else if (name === 'cut' && color === 'darkYellow') {
        imgName = cutDarkYellow;
    } else if (name === 'doc' && color === 'gray') {
        imgName = docGray;
    } else if (name === 'doc' && color === 'yellow') {
        imgName = docyellow;
    } else if (name === 'doc' && color === 'darkYellow') {
        imgName = docDarkYellow;
    } else if (name === 'dollar' && color === 'gray') {
        imgName = dollarGray;
    } else if (name === 'dollar' && color === 'yellow') {
        imgName = dollaryellow;
    } else if (name === 'dollar' && color === 'darkYellow') {
        imgName = dollarDarkYellow;
    } else if (name === 'drill' && color === 'gray') {
        imgName = drillGray;
    } else if (name === 'drill' && color === 'yellow') {
        imgName = drillyellow;
    } else if (name === 'drill' && color === 'darkYellow') {
        imgName = drillDarkYellow;
    } else if (name === 'heating' && color === 'gray') {
        imgName = heatingGray;
    } else if (name === 'heating' && color === 'yellow') {
        imgName = heatingyellow;
    } else if (name === 'heating' && color === 'darkYellow') {
        imgName = heatingDarkYellow;
    } else if (name === 'lift' && color === 'gray') {
        imgName = liftGray;
    } else if (name === 'lift' && color === 'yellow') {
        imgName = liftyellow;
    } else if (name === 'lift' && color === 'darkYellow') {
        imgName = liftDarkYellow;
    } else if (name === 'tick' && color === 'gray') {
        imgName = tickGray;
    } else if (name === 'tick' && color === 'yellow') {
        imgName = tickyellow;
    } else if (name === 'tick' && color === 'darkYellow') {
        imgName = tickDarkYellow;
    } else if (name === 'truck' && color === 'gray') {
        imgName = truckGray;
    } else if (name === 'truck' && color === 'yellow') {
        imgName = truckyellow;
    } else if (name === 'truck' && color === 'darkYellow') {
        imgName = truckDarkYellow;
    }
    return imgName;
};

const jobsInfoArr = [
    {
        text: 'Invoicing',
        icon: 'dollar'
    },
    {
        text: 'Ready for Deliver',
        icon: 'truck'
    },
    {
        text: 'Packaging',
        icon: 'box'
    },
    {
        text: 'Quality Control',
        icon: 'tick'
    },
    {
        text: 'Heat Treatment / Coating / Painting or Plating',
        icon: 'heating'
    },
    {
        text: 'Machining',
        icon: 'drill'
    },
    {
        text: 'Cutting',
        icon: 'cut'
    },
    {
        text: 'Material Supply',
        icon: 'lift'
    },
    {
        text: 'Engineering / Designing / Drafting',
        icon: 'doc'
    }
];

const ProjectList = ({ jobsInfo, isLoaded }) => {
    const cardProvider = status => {
        return isLoaded ? (
            <>
                <CardSkeleton height='50' background='#F2F2F2' foregroundColor='white' />
                <CardSkeleton height='50' background='#F2F2F2' foregroundColor='white' />
                <CardSkeleton height='50' background='#F2F2F2' foregroundColor='white' />
                <CardSkeleton height='50' background='#F2F2F2' foregroundColor='white' />
                <CardSkeleton height='50' background='#F2F2F2' foregroundColor='white' />
                <CardSkeleton height='50' background='#F2F2F2' foregroundColor='white' />
                <CardSkeleton height='50' background='#F2F2F2' foregroundColor='white' />
                <CardSkeleton height='50' background='#F2F2F2' foregroundColor='white' />
                <CardSkeleton height='50' background='#F2F2F2' foregroundColor='white' />
            </>
        ) : (
            jobsInfoArr.map((item, index) => (
                <li
                    className={status === index + 1 ? 'active' : index + 1 < status ? 'deactive' : 'noraml'}
                    key={`jobs_status_${index + 1}`}
                >
                    <Image
                        src={ImageHandler(item.icon, status === index + 1 ? 'yellow' : index + 1 < status ? 'gray' : 'darkYellow')}
                        alt=''
                        width={80}
                    />
                    <p>{item.text}</p>
                </li>
            ))
        );
    };

    return (
        <MainField state={jobsInfo.state}>
            <div className='progress_bar'></div>
            <ul>{cardProvider(jobsInfo.state)}</ul>
        </MainField>
    );
};

export default ProjectList;
