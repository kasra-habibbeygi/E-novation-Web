/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import Link from 'next/link';

// Assets
import { MainField } from './list.style';

// Component
import Button from '../../form-group/button';
import EmptyField from '../../template/empty-field';
import ContentLoader from 'react-content-loader';

// API
import { GetOpenJobs } from '@/src/api-request/jobs/current';

const CurrentJobsList = () => {
    const [openJobsList, setOpenJobsList] = useState([]);
    

    useEffect(() => {
        GetOpenJobs()
            .then(res => {
                setOpenJobsList(res);
            })
            .catch(() => {});
    }, []);

    return (
        <MainField>
            <ContentLoader
                speed={1}
                viewBox="0 0 200 160"
                backgroundColor="#e3e3e3"
                foregroundColor="#c4c4c4"
                height={200}
            >
                <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
            </ContentLoader>
            {openJobsList.length
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
