// Assets
import { UserAsideField } from './user-aside.style';
import AvatarImg from '../../assets/images/icons/avatar.svg';
import Image from 'next/image';

const UserAside = () => {
    return (
        <UserAsideField>
            <Image src={AvatarImg} alt='' width={100} />
            <h3>Welcome Nadie</h3>
            <button>Log Out</button>
            <div className='user_info_field'>
                <div>
                    <p>Your Current Jobs</p>
                    <b>14</b>
                </div>
                <div>
                    <p>Your All Time Jobs</p>
                    <b>45</b>
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
            </div>
        </UserAsideField>
    );
};

export default UserAside;
