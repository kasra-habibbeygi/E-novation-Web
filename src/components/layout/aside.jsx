import Link from 'next/link';

// Assets
import { AsideField } from './aside.style';
import Home from '../../assets/images/icons/home.svg';
import Image from 'next/image';

const Aside = () => {
    return (
        <AsideField>
            <ul>
                <li>
                    <Link href='/current-jobs'>
                        <Image src={Home} alt='' width={50} />
                    </Link>
                </li>
            </ul>
        </AsideField>
    );
};

export default Aside;
