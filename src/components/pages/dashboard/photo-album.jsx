import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// Assets
import { MainField, Card, ModalField } from './photo-album.style';
import Share from '@/src/assets/images/icons/share.svg';

// Component
import Button from '../../form-group/button';
import EmptyField from '../../template/empty-field';
import CardSkeleton from '../../skeleton/card';

// API
import { GetJobAblum } from '@/src/api-request/jobs/album';

const PhotoAlbum = () => {
    const router = useRouter();
    const [infoModalStatus, setInfoModalStatus] = useState(false);
    const [specificInfo, setSpecificInfo] = useState({});
    const [albumList, setAlbumList] = useState([]);
    const [isLoaded, setIsloaded] = useState(true);

    useEffect(() => {
        GetJobAblum(router.query.jobId)
            .then(res => {
                setAlbumList(res);
                setIsloaded(false);
            })
            .catch(() => {});
    }, [router.query.jobId]);

    const infoModalStatusHandler = item => {
        setSpecificInfo(item);
        setInfoModalStatus(true);
    };

    return (
        <>
            <MainField>
                {isLoaded ? (
                    <>
                        <CardSkeleton height='180' />
                        <CardSkeleton height='180' />
                        <CardSkeleton height='180' />
                        <CardSkeleton height='180' />
                    </>
                ) : albumList.length ? (
                    albumList.map(item => (
                        <Card
                            background={item.img.replace('/media', ':8001/media')}
                            onClick={() => infoModalStatusHandler(item)}
                            key={`album_ard_${item.id}`}
                        >
                            <div>
                                <Image src={Share} alt='' width={50} />
                            </div>
                        </Card>
                    ))
                ) : (
                    <EmptyField />
                )}
            </MainField>
            <ModalField status={infoModalStatus}>
                <div className='layout' onClick={() => setInfoModalStatus(false)}></div>
                <div className='content'>
                    <Image src={specificInfo?.img?.replace('/media', ':8001/media')} alt='' width={1500} height={1000} />
                    <p>{specificInfo?.description ?? 'No description has been written for this photo!'}</p>
                    <p>{specificInfo?.description ?? 'No description has been written for this photo!'}</p>
                    <p>{specificInfo?.description ?? 'No description has been written for this photo!'}</p>
                    <p>{specificInfo?.description ?? 'No description has been written for this photo!'}</p>
                    <Button text='Close' clickHandler={() => setInfoModalStatus(false)} color='danger' />
                </div>
            </ModalField>
        </>
    );
};

export default PhotoAlbum;
