// Assets
import Image from 'next/image';
import { MainField } from '../assets/styles/contact-us';
import Email from '../assets/images/icons/mail.svg';
import Phone from '../assets/images/icons/phone-call.svg';
import Location from '../assets/images/icons/location.svg';

// Component
import LayoutProvider from '../components/layout/layout.provider';

const ContactUs = () => {
    return (
        <LayoutProvider>
            <MainField>
                <div>
                    <Image src={Location} alt='' width={100} />
                    <p>7/24 Horus Bend , Bibra Lake , Wa 6163</p>
                </div>
                <div>
                    <Image src={Email} alt='' width={100} />
                    <p>Info@e-novation.com.au</p>
                </div>
                <div>
                    <Image src={Phone} alt='' width={100} />
                    <p>+61 8 6117 6749</p>
                </div>
            </MainField>
        </LayoutProvider>
    );
};

export default ContactUs;
