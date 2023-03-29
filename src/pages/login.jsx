import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// Assets
import { AuthField, ImageField } from '../assets/styles/auth/auth.style';
import AuthImg from '../assets/images/authSidePicture.jpg';
import Logo from '../assets/images/logo.png';

// Component
import AuthForm from '../components/pages/auth/form';

const Login = () => {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('userInfo') !== null) {
            router.push('/current-jobs');
        }
    }, [router]);

    return (
        <AuthField>
            <ImageField image={AuthImg.src}></ImageField>
            <div className='right_field'>
                <Image src={Logo} alt='Main Logo' width={400} />
                <AuthForm />
            </div>
            <div className='login_footer'>
                <p>Client Application</p>
                <small>All rights reserved by E-novation engineering Co.</small>
            </div>
        </AuthField>
    );
};

export default Login;
