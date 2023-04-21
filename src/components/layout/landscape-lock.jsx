import Image from 'next/image';

// Assets
import { MainField } from './landscape-lock.style';
import RotateLogo from '@/src/assets/images/icons/rotate.svg';
import Logo from '@/src/assets/images/white-logo.png';

const LandscapeLock = () => {
    return (
        <MainField>
            <Image src={Logo} alt='' />
            <div>
                <Image src={RotateLogo} alt='' />
                rotate your phone to use the app
            </div>
        </MainField>
    );
};

export default LandscapeLock;
