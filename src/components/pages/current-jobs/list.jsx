/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Assets
import { MainField } from './list.style';
import History from '@/src/assets/images/icons/history.svg';

// Component
import Button from '../../form-group/button';
import EmptyField from '../../template/empty-field';
import RedirectButton from '../../template/redirect-button';
import CardSkeleton from '../../skeleton/card';

// API
import { GetOpenJobs } from '@/src/api-request/jobs/current';

// Hooks
import useWindowDimensions from '@/src/hooks/get-window-dimensions';

const CurrentJobsList = () => {
    const router = useRouter();
    const [openJobsList, setOpenJobsList] = useState([]);
    const [isLoaded, setIsloaded] = useState(true);
    const [domLoaded, setDomLoaded] = useState(false);
    const { width } = useWindowDimensions();

    const mobileRedirectHandler = src => {
        if(width < 900){
            router.push(src);
        }
    };
    
    useEffect(() => {
        setDomLoaded(true);
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
                <CardSkeleton height={domLoaded && width > 900 ? '200' : '53'}/>
                <CardSkeleton height={domLoaded && width > 900 ? '200' : '53'}/>
                <CardSkeleton height={domLoaded && width > 900 ? '200' : '53'}/>    
                <CardSkeleton height={domLoaded && width > 900 ? '200' : '53'}/>
            </> : openJobsList.length
                ? openJobsList.map(item => (
                    <div key={`current_jobs_card_${item.id}`} onClick={() => mobileRedirectHandler(`/dashboard?jobId=${item.id}`)}>
                        <h3>{item.name}</h3>
                        <Link href={`/dashboard?jobId=${item.id}`}>
                            <Button text='View' color='warning' />
                        </Link>
                    </div>
                ))
                : <EmptyField />}
            {domLoaded && width < 900 && <RedirectButton src='/history' text='History' icon={History}/>}
        </MainField>
    );
};

export default CurrentJobsList;
