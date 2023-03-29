import Image from 'next/image';
import { userAsideStatusHandler } from '@/src/state-manager/reducers/tools';
import { useDispatch } from 'react-redux';

// Assets
import { NavbarField } from './navbar.style';
import Logo from '../../assets/images/logo.png';
import Menu from '../../assets/images/icons/menu.svg';

const Navbar = () => {
    const display = useDispatch();
    return (
        <NavbarField>
            <Image src={Logo} alt='Main Logo' width={300} />
            <div className='right_field'>
                <Image src={Menu} alt='Sandwitch Menu' width={100} onClick={() => display(userAsideStatusHandler(true))} />
            </div>
        </NavbarField>
    );
};

export default Navbar;
