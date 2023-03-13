/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Assets
import { MainField } from './list.style';

// Component
import Button from '../../form-group/button';
import EmptyField from '../../template/empty-field';
import CardSkeleton from '../../skeleton/card';

// API
import { GetOpenJobs } from '@/src/api-request/jobs/current';

const CurrentJobsList = () => {
    const [openJobsList, setOpenJobsList] = useState([]);
    const [isLoaded, setIsloaded] = useState(true);
    
    useEffect(() => {
        GetOpenJobs()
            .then(res => {
                setIsloaded(false);
                setOpenJobsList(res);
            })
            .catch(() => {});
    }, []);

    return (
        <MainField>
            {isLoaded ? <>
                <CardSkeleton height='300'/>
                <CardSkeleton height='300'/>
                <CardSkeleton height='300'/>    
                <CardSkeleton height='300'/>
            </> : openJobsList.length
                ? openJobsList.map(item => (
                    <div key={`current_jobs_card_${item.id}`}>
                        <h3>{item.name}</h3>
                        <Link href={`/dashboard?jobId=${item.id}`}>
                            <Button text='View' color='warning' />
                        </Link>
                    </div>
                ))
                : <EmptyField />}
        </MainField>
    );
};

export default CurrentJobsList;
