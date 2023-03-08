import Image from 'next/image';

// Assets
import { NavbarField } from './navbar.style';
import Logo from '../../assets/images/logo.png';

const Navbar = () => {
    return (
        <NavbarField>
            <Image src={Logo} alt='Main Logo' width={300} />
        </NavbarField>
    );
};

export default Navbar;
