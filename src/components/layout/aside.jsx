import Link from 'next/link';
import Image from 'next/image';

// Assets
import { AsideField } from './aside.style';
import Home from '../../assets/images/icons/home.svg';
import History from '../../assets/images/icons/history.svg';
import SMS from '../../assets/images/icons/sms.svg';
import Phone from '../../assets/images/icons/phone.svg';
import Grid from '../../assets/images/icons/visualization.svg';

const Aside = () => {
    return (
        <AsideField>
            <ul>
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
                <li className='mobile_view'>
                    <a href='sms:+61412346781'>
                        <Image src={SMS} alt='' width={50} />
                        Text Message
                    </a>
                </li>
                <li className='web_view'>
                    <Link href='/contact-us'>
                        <Image src={Phone} alt='' width={50} />
                        Call Us
                    </Link>
                </li>
                <li className='mobile_view'>
                    <a href='tel:+61861177649'>
                        <Image src={Phone} alt='' width={50} />
                        Call Us
                    </a>
                </li>
                <li>
                    <Link href='/about-us'>
                        <Image src={Grid} alt='' width={50} />
                        About Us
                    </Link>
                </li>
            </ul>
        </AsideField>
    );
};

export default Aside;
