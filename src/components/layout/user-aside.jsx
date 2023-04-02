/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { userAsideStatusHandler } from '@/src/state-manager/reducers/tools';
import { infoHandler } from '@/src/state-manager/reducers/user';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ContentLoader from 'react-content-loader';
import Link from 'next/link';

// Assets
import { UserAsideField, Layout } from './user-aside.style';
import AvatarImg from '../../assets/images/icons/avatar.svg';
import SimpleLogo from '../../assets/images/simple-logo.png';
import Home from '../../assets/images/icons/home.svg';
import History from '../../assets/images/icons/history.svg';
import SMS from '../../assets/images/icons/sms.svg';
import Phone from '../../assets/images/icons/phone.svg';
import Grid from '../../assets/images/icons/visualization.svg';
import LogoutIcon from '../../assets/images/icons/logout.svg';

// component
import EmptyField from '../template/empty-field';

// API
import { GetJobsMessages } from '../../api-request/jobs/messages';

// Hooks
import useWindowDimensions from '@/src/hooks/get-window-dimensions';

const UserAside = () => {
    const { width } = useWindowDimensions();
    const [domLoaded, setDomLoaded] = useState(false);
    const router = useRouter();
    const display = useDispatch();
    const asideStatus = useSelector(state => state.Tools.userAsideStatus);
    const userInfo = useSelector(state => state.UserInfo.info);
    const [messagesList, setMessagesList] = useState([]);
    const [isLoaded, setIsloaded] = useState(true);

    useEffect(() => {
        setDomLoaded(true);

        if (router.query.jobId && width > 900 && messagesList.length === 0) {
            GetJobsMessages(router.query.jobId)
                .then(res => {
                    setMessagesList(res);
                    setIsloaded(false);
                })
                .catch(() => {})
                .finally(() => {});
        }
    }, [router.query.jobId, width]);

    useEffect(() => {
        display(userAsideStatusHandler(false));
    }, [router.pathname]);

    const logOutHandler = () => {
        router.push('/current-jobs');
        localStorage.removeItem('userInfo');
        display(infoHandler(''));
    };

    const Messages = () => {
        if (router.query.jobId) {
            return (
                <div className='messages_field'>
                    <header>Messages</header>
                    {isLoaded ? (
                        <div className='loader_field'>
                            <ContentLoader speed={1} height={120} backgroundColor='#212e81' foregroundColor='#3d4a9e'>
                                <circle cx='31' cy='65' r='30' />
                                <rect x='78' y='14' rx='5' ry='5' width='257' height='105' />
                            </ContentLoader>
                            <ContentLoader speed={1} height={120} backgroundColor='#212e81' foregroundColor='#3d4a9e'>
                                <circle cx='31' cy='65' r='30' />
                                <rect x='78' y='14' rx='5' ry='5' width='257' height='105' />
                            </ContentLoader>
                        </div>
                    ) : messagesList.length ? (
                        messagesList.map(item => (
                            <div className='message' key={`aside_messages_field_${item.id}`}>
                                <span className='message_logo'>
                                    <Image src={SimpleLogo} alt='' width={100} />
                                </span>
                                <div>
                                    <b>E-novation Admin</b>
                                    <p>{item.comment}</p>
                                    <small>{item.time}</small>
                                </div>
                            </div>
                        ))
                    ) : (
                        <EmptyField />
                    )}
                </div>
            );
        }

        return <></>;
    };

    return (
        <>
            <Layout status={asideStatus} onClick={() => display(userAsideStatusHandler(false))}></Layout>
            <UserAsideField
                status={asideStatus}
                avatarImage={domLoaded && (userInfo.img ? `${process.env.URL}/media/${userInfo.img}` : AvatarImg)}
            >
                <div className='avatar'></div>
                <h3>
                    Welcome <span>{domLoaded && userInfo.company}</span>
                </h3>
                <button onClick={logOutHandler}>Log Out</button>
                <div className='user_info_field'>
                    <div className='content_field'>
                        <div>
                            <p>Your Current Jobs : </p>
                            <b>{domLoaded && userInfo.openproject}</b>
                        </div>
                        <div>
                            <p>Your All Time Jobs : </p>
                            <b>{domLoaded && userInfo.allproject}</b>
                        </div>
                    </div>
                </div>
                <span className='seprator'></span>
                <ul className='nav_list'>
                    <li>
                        <Link href='/current-jobs'>
                            <Image src={Home} alt='' width={50} />
                            Current Jobs
                        </Link>
                    </li>
                    <li>
                        <Link href='/history'>
                            <Image src={History} alt='' width={50} />
                            History
                        </Link>
                    </li>
                    <li>
                        <a href='tel:+61861177649'>
                            <Image src={Phone} alt='' width={50} />
                            Call Us
                        </a>
                    </li>
                    <li>
                        <a href='sms:+61412346781'>
                            <Image src={SMS} alt='' width={50} />
                            Text Message
                        </a>
                    </li>
                    <li>
                        <Link href='/about-us'>
                            <Image src={Grid} alt='' width={50} />
                            About Us
                        </Link>
                    </li>
                    <li>
                        <div href='/' onClick={logOutHandler}>
                            <Image src={LogoutIcon} alt='' width={50} />
                            Log out
                        </div>
                    </li>
                </ul>
                {Messages()}
                <div className='copy_right'>
                    <p>Version 1.0</p>
                    <small>All rights reserved by E-novation engineering Co.</small>
                </div>
            </UserAsideField>
        </>
    );
};

export default UserAside;
