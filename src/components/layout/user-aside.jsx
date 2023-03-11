import { useEffect, useState } from 'react';
import { userAsideStatusHandler } from '@/src/state-manager/reducers/tools';
import { infoHandler } from '@/src/state-manager/reducers/user';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';

// Assets
import { UserAsideField, Layout } from './user-aside.style';
import AvatarImg from '../../assets/images/icons/avatar.svg';

const UserAside = () => {
    const [domLoaded, setDomLoaded] = useState(false);
    const router = useRouter();
    const display = useDispatch();
    const asideStatus = useSelector(state => state.Tools.userAsideStatus);
    const userInfo = useSelector(state => state.UserInfo.info);

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    const logOutHandler = () => {
        router.push('/current-jobs');
        localStorage.removeItem('userInfo');
        display(infoHandler(''));
    };

    return (
        <>
            <Layout status={asideStatus} onClick={() => display(userAsideStatusHandler(false))}></Layout>
            <UserAsideField
                status={asideStatus}
                avatarImage={domLoaded && (userInfo.img ? `${process.env.URL}/media/${userInfo.img}` : AvatarImg)}
            >
                {/* <Image
                    src={domLoaded && (userInfo.img ? `${process.env.URL}/media/${userInfo.img}` : AvatarImg)}
                    alt=''
                    width={100}
                    height={100}
                /> */}
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
                <div className='messages_field'>
                    <header>Messages</header>
                    <div className='message'>
                        <Image src={AvatarImg} alt='' width={100} />
                        <div>
                            <b>Jone Doe</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat hic suscipit neque</p>
                        </div>
                    </div>
                    <div className='message'>
                        <Image src={AvatarImg} alt='' width={100} />
                        <div>
                            <b>Jone Doe</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat hic suscipit neque</p>
                        </div>
                    </div>
                    <div className='message'>
                        <Image src={AvatarImg} alt='' width={100} />
                        <div>
                            <b>Jone Doe</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat hic suscipit neque</p>
                        </div>
                    </div>
                    <div className='message'>
                        <Image src={AvatarImg} alt='' width={100} />
                        <div>
                            <b>Jone Doe</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat hic suscipit neque</p>
                        </div>
                    </div>
                    <div className='message'>
                        <Image src={AvatarImg} alt='' width={100} />
                        <div>
                            <b>Jone Doe</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat hic suscipit neque</p>
                        </div>
                    </div>
                    <div className='message'>
                        <Image src={AvatarImg} alt='' width={100} />
                        <div>
                            <b>Jone Doe</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat hic suscipit neque</p>
                        </div>
                    </div>
                    <div className='message'>
                        <Image src={AvatarImg} alt='' width={100} />
                        <div>
                            <b>Jone Doe</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat hic suscipit neque</p>
                        </div>
                    </div>
                    <div className='message'>
                        <Image src={AvatarImg} alt='' width={100} />
                        <div>
                            <b>Jone Doe</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat hic suscipit neque</p>
                        </div>
                    </div>
                </div>
            </UserAsideField>
        </>
    );
};

export default UserAside;
