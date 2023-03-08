import Image from 'next/image';

// Assets
import { AuthField, ImageField } from '../assets/styles/auth/auth.style';
import AuthImg from '../assets/images/authSidePicture.jpg';
import Logo from '../assets/images/logo.png';

// Component
import AuthForm from '../components/pages/auth/form';

const Login = () => {
    return (
        <AuthField>
            <ImageField image={AuthImg.src}></ImageField>
            <div className='right_field'>
                <Image src={Logo} alt='Main Logo' width={400} />
                <AuthForm />
            </div>
        </AuthField>
    );
};

export default Login;
