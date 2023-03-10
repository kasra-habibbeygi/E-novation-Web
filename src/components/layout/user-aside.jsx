import { userAsideStatusHandler } from '@/src/state-manager/reducers/tools';
import { useSelector, useDispatch } from 'react-redux';

// Assets
import { UserAsideField, Layout } from './user-aside.style';
import AvatarImg from '../../assets/images/icons/avatar.svg';
import Image from 'next/image';

const UserAside = () => {
    const display = useDispatch();
    const asideStatus = useSelector(state => state.Tools.userAsideStatus);

    return (
        <>
            <Layout status={asideStatus} onClick={() => display(userAsideStatusHandler(false))}></Layout>
            <UserAsideField status={asideStatus}>
                <Image src={AvatarImg} alt='' width={100} />
                <h3>Welcome Nadie</h3>
                <button>Log Out</button>
                <div className='user_info_field'>
                    <div className='content_field'>
                        <div>
                            <p>Your Current Jobs</p>
                            <b>14</b>
                        </div>
                        <div>
                            <p>Your All Time Jobs</p>
                            <b>45</b>
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
