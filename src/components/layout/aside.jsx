import Link from 'next/link';

// Assets
import { AsideField } from './aside.style';
import Email from '../../assets/images/icons/email.svg';
import Home from '../../assets/images/icons/home.svg';
import Warning from '../../assets/images/icons/warning.svg';
import User from '../../assets/images/icons/user.svg';
import Chart from '../../assets/images/icons/donut-chart.svg';
import Image from 'next/image';

const Aside = () => {
    return (
        <AsideField>
            <ul>
                <li>
                    <Link href='/'>
                        <Image src={Home} alt='' width={50} />
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <Image src={Email} alt='' width={50} />
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <Image src={User} alt='' width={50} />
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <Image src={Chart} alt='' width={50} />
                    </Link>
                </li>
                <li>
                    <Link href='/'>
                        <Image src={Warning} alt='' width={50} />
                    </Link>
                </li>
            </ul>
        </AsideField>
    );
};

export default Aside;
