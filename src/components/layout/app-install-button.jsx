/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Image from 'next/image';

// Assets
import { ModalField } from './app-install-button.style';
import Download from '../../assets/images/icons/download.svg';

// Component
import Button from '../form-group/button';

const AppInstallModal = () => {
    const [infoModalStatus, setInfoModalStatus] = useState(true);

    return (
        <ModalField status={infoModalStatus}>
            <div className='layout' onClick={() => setInfoModalStatus(false)}></div>
            <div className='content'>
                <h3>
                    <Image src={Download} alt='' />
                    Download Application
                </h3>
                <p>
                    This mobile app utilises PWA technology with a strong focus on user information security, and does not have access to
                    the camera, location, mobile sensors or any other user's personal information.
                </p>
                <p>Apple users must use safari browser to install the app.</p>
                <div className='button_group'>
                    <Button text='Install App' extraId='installApp' />
                    <Button text='Now Now' extraClass='close_button' />
                </div>
            </div>
        </ModalField>
    );
};

export default AppInstallModal;
