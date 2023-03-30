import Image from 'next/image';
import Link from 'next/link';

// Assets
import { ButtonField } from './redirect-button.style';

const RedirectButton = ({ text, icon, src }) => {
    return (
        <ButtonField>
            <Link href={src}>
                <Image src={icon} alt='' />
                {text}
            </Link>
        </ButtonField>
    );
};

export default RedirectButton;
