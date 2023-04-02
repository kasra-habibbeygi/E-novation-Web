import Image from 'next/image';
import Link from 'next/link';

// Assets
import { ButtonField } from './redirect-button.style';

const RedirectButton = ({ text, icon, src, returnHandler }) => {
    return (
        <ButtonField>
            {src ? (
                <Link href={src}>
                    <Image src={icon} alt='' />
                    {text}
                </Link>
            ) : (
                <div onClick={() => returnHandler()}>
                    <Image src={icon} alt='' />
                    {text}
                </div>
            )}
        </ButtonField>
    );
};

export default RedirectButton;
