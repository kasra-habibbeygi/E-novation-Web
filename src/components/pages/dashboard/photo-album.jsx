import { useState } from 'react';
import Image from 'next/image';

// Assets
import { MainField, Card, ModalField } from './photo-album.style';
import CarImg from '@/src/assets/images/car.jpg';
import Share from '@/src/assets/images/icons/share.svg';

// Component
import Button from '../../form-group/button';

const PhotoAlbum = () => {
    const [infoModalStatus, setInfoModalStatus] = useState(false);

    const infoModalStatusHandler = () => {
        setInfoModalStatus(true);
    };

    return (
        <>
            <MainField>
                <Card background={CarImg.src} onClick={infoModalStatusHandler}>
                    <div>
                        <Image src={Share} alt='' width={50} />
                    </div>
                </Card>
                <Card background={CarImg.src} onClick={infoModalStatusHandler}>
                    <div>
                        <Image src={Share} alt='' width={50} />
                    </div>
                </Card>
                <Card background={CarImg.src} onClick={infoModalStatusHandler}>
                    <div>
                        <Image src={Share} alt='' width={50} />
                    </div>
                </Card>
                <Card background={CarImg.src} onClick={infoModalStatusHandler}>
                    <div>
                        <Image src={Share} alt='' width={50} />
                    </div>
                </Card>
                <Card background={CarImg.src} onClick={infoModalStatusHandler}>
                    <div>
                        <Image src={Share} alt='' width={50} />
                    </div>
                </Card>
                <Card background={CarImg.src} onClick={infoModalStatusHandler}>
                    <div>
                        <Image src={Share} alt='' width={50} />
                    </div>
                </Card>
                <Card background={CarImg.src} onClick={infoModalStatusHandler}>
                    <div>
                        <Image src={Share} alt='' width={50} />
                    </div>
                </Card>
                <Card background={CarImg.src} onClick={infoModalStatusHandler}>
                    <div>
                        <Image src={Share} alt='' width={50} />
                    </div>
                </Card>
                <Card background={CarImg.src} onClick={infoModalStatusHandler}>
                    <div>
                        <Image src={Share} alt='' width={50} />
                    </div>
                </Card>
                <Card background={CarImg.src} onClick={infoModalStatusHandler}>
                    <div>
                        <Image src={Share} alt='' width={50} />
                    </div>
                </Card>
            </MainField>
            <ModalField status={infoModalStatus}>
                <div className='layout'></div>
                <div className='content'>
                    <Image src={CarImg} alt='' width={800} />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur doloribus, blanditiis exercitationem dolorem
                        quia distinctio numquam accusamus repellendus, suscipit ea minus, amet delectus. Aspernatur maxime consequuntur
                        eaque odit ab molestias?
                    </p>
                    <Button text='Close' clickHandler={() => setInfoModalStatus(false)} color='danger' />
                </div>
            </ModalField>
        </>
    );
};

export default PhotoAlbum;
