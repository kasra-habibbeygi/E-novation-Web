import Image from 'next/image';
import { userAsideStatusHandler } from '@/src/state-manager/reducers/tools';
import { useDispatch } from 'react-redux';

// Assets
import { NavbarField } from './navbar.style';
import Logo from '../../assets/images/logo.png';
// import Menu from '../../assets/images/icons/menu.svg';
import BlackUser from '../../assets/images/icons/black-user.svg';

const Navbar = () => {
    const display = useDispatch();
    return (
        <NavbarField>
            <Image src={Logo} alt='Main Logo' width={300} />
            <div className='right_field'>
                <Image src={BlackUser} alt='Avatar' width={100} onClick={() => display(userAsideStatusHandler(true))} />
                {/* <Image src={Menu} alt='Sandwitch Menu' width={100} /> */}
            </div>
        </NavbarField>
    );
};

export default Navbar;
