import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// Assets
import { MainField, Card, ModalField } from './photo-album.style';
import Share from '@/src/assets/images/icons/share.svg';

// Component
import Button from '../../form-group/button';
import EmptyField from '../../template/empty-field';

// API
import { GetJobAblum } from '@/src/api-request/jobs/album';

const PhotoAlbum = () => {
    const router = useRouter();
    const [infoModalStatus, setInfoModalStatus] = useState(false);
    const [specificInfo, setSpecificInfo] = useState({});
    const [albumList, setAlbumList] = useState([]);

    useEffect(() => {
        GetJobAblum(router.query.jobId)
            .then(res => {
                setAlbumList(res);
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
                {albumList.length ? (
                    albumList.map(item => (
                        <Card background={item.img} onClick={() => infoModalStatusHandler(item)} key={`album_ard_${item.id}`}>
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
                <div className='layout'></div>
                <div className='content'>
                    <Image src={specificInfo.img} alt='' width={800} height={500} />
                    <p>{specificInfo?.description ?? 'No description has been written for this photo!'}</p>
                    <Button text='Close' clickHandler={() => setInfoModalStatus(false)} color='danger' />
                </div>
            </ModalField>
        </>
    );
};

export default PhotoAlbum;
