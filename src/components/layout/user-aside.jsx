import { useEffect, useState } from 'react';
import { userAsideStatusHandler } from '@/src/state-manager/reducers/tools';
import { infoHandler } from '@/src/state-manager/reducers/user';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ContentLoader from 'react-content-loader';

// Assets
import { UserAsideField, Layout } from './user-aside.style';
import AvatarImg from '../../assets/images/icons/avatar.svg';
import SimpleLogo from '../../assets/images/simple-logo.png';

// component
import EmptyField from '../template/empty-field';

// API
import { GetJobsMessages } from '../../api-request/jobs/messages';

const UserAside = () => {
    const [domLoaded, setDomLoaded] = useState(false);
    const router = useRouter();
    const display = useDispatch();
    const asideStatus = useSelector(state => state.Tools.userAsideStatus);
    const userInfo = useSelector(state => state.UserInfo.info);
    const [messagesList, setMessagesList] = useState([]);
    const [isLoaded, setIsloaded] = useState(true);

    useEffect(() => {
        setDomLoaded(true);

        if (router.query.jobId) {
            GetJobsMessages(router.query.jobId)
                .then(res => {
                    setMessagesList(res);
                    setIsloaded(false);
                })
                .catch(() => {})
                .finally(() => {});
        }
    }, [router.query.jobId]);

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
                <h3>Welcome {domLoaded && userInfo.company}</h3>
                <button onClick={logOutHandler}>Log Out</button>
                <div className='user_info_field'>
                    <div className='content_field'>
                        <div>
                            <p>Your Current Jobs</p>
                            <b>{domLoaded && userInfo.openproject}</b>
                        </div>
                        <div>
                            <p>Your All Time Jobs</p>
                            <b>{domLoaded && userInfo.allproject}</b>
                        </div>
                    </div>
                </div>
                {Messages()}
            </UserAsideField>
        </>
    );
};

export default UserAside;
