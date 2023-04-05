import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Assets
import { MainField } from './document.style';

// Component
import Button from '../../form-group/button';
import EmptyField from '../../template/empty-field';
import CardSkeleton from '../../skeleton/card';

// API
import { GetJobDocument } from '@/src/api-request/jobs/document';

// Hooks
import useWindowDimensions from '@/src/hooks/get-window-dimensions';

// Utils
import { Time } from '@/src/utils/constasts';

const Document = () => {
    const router = useRouter();
    const { width } = useWindowDimensions();
    const [docList, setDocList] = useState([]);
    const [isLoaded, setIsloaded] = useState(true);

    useEffect(() => {
        GetJobDocument(router.query.jobId)
            .then(res => {
                setDocList(res);
                setIsloaded(false);
            })
            .catch(() => {});

        const apiRecall = setInterval(() => {
            GetJobDocument(router.query.jobId)
                .then(res => {
                    setDocList(res);
                })
                .catch(() => {});
        }, Time.API_RECALL_TIME);

        return () => {
            clearInterval(apiRecall);
        };
    }, [router.query.jobId]);

    return (
        <MainField>
            {isLoaded ? (
                <>
                    <CardSkeleton height='300' />
                    <CardSkeleton height='300' />
                    <CardSkeleton height='300' />
                    <CardSkeleton height='300' />
                </>
            ) : docList.length ? (
                width > 900 ? (
                    docList.map(item => (
                        <div key={`doc_card_${item.id}`}>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <a href={item.att_file} target='_blank'>
                                <Button text='View' color='warning' />
                            </a>
                        </div>
                    ))
                ) : (
                    docList.map(item => (
                        <div key={`doc_card_${item.id}`}>
                            <a href={item.att_file} target='_blank'>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                            </a>
                        </div>
                    ))
                )
            ) : (
                <EmptyField />
            )}
        </MainField>
    );
};

export default Document;
