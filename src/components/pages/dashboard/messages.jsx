/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// Assets
import { MainField } from './messages.style';
import SimpleLogo from '@/src/assets/images/simple-logo.png';

// component
import EmptyField from '../../template/empty-field';
import CardSkeleton from '../../skeleton/card';

// API
import { GetJobsMessages } from '@/src/api-request/jobs/messages';

// Hooks
import useWindowDimensions from '@/src/hooks/get-window-dimensions';

const MobileMessages = () => {
    const router = useRouter();
    const { width } = useWindowDimensions();
    const [messagesList, setMessagesList] = useState([]);
    const [isLoaded, setIsloaded] = useState(true);

    useEffect(() => {
        if (router.query.jobId && width < 900 && messagesList.length === 0) {
            GetJobsMessages(router.query.jobId)
                .then(res => {
                    setMessagesList(res);
                    setIsloaded(false);
                })
                .catch(() => {})
                .finally(() => {});
        }
    }, [router.query.jobId, width]);

    return (
        <MainField>
            <ul>
                {isLoaded ? (
                    <>
                        <CardSkeleton height='90' />
                        <CardSkeleton height='90' />
                        <CardSkeleton height='90' />
                    </>
                ) : messagesList.length ? (
                    messagesList.map(item => (
                        <li key={`aside_messages_field_mobile_${item.id}`}>
                            <div className='header'>
                                <span>
                                    <Image src={SimpleLogo} alt='' width={100} />
                                    <b>E-novation Admin</b>
                                </span>
                                <small>{item.time}</small>
                            </div>
                            <p>{item.comment}</p>
                        </li>
                    ))
                ) : (
                    <EmptyField />
                )}
            </ul>
        </MainField>
    );
};

export default MobileMessages;
