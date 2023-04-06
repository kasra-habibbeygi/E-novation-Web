// Assets
import { LoaderField } from './loader.style';
import Logo from '../../assets/images/white-logo.png';
import Image from 'next/image';
import PulseLoader from 'react-spinners/PulseLoader';

const Loader = () => {
    return (
        <LoaderField>
            <Image src={Logo} alt='main Logo' />
            <p>
                Loading <PulseLoader color='#FFFFFF' loading={true} size={7} cssOverride={{ position: 'relative', top: '2px' }} />
            </p>
        </LoaderField>
    );
};

export default Loader;
