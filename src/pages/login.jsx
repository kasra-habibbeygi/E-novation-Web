import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// Assets
import { AuthField, ImageField } from '../assets/styles/auth/auth.style';
import AuthImg from '../assets/images/authSidePicture.jpg';
import Logo from '../assets/images/logo.png';
import WhiteLogo from '../assets/images/white-logo.png';

// Component
import AuthForm from '../components/pages/auth/form';
import { GetOpenJobs } from '../api-request/jobs/current';

const Login = () => {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('userInfo') !== null) {
            router.push('/current-jobs');
        }
        GetOpenJobs();
    }, [router]);

    return (
        <AuthField>
            <ImageField image={AuthImg.src}></ImageField>
            <div className='right_field'>
                <Image src={Logo} alt='Main Logo' width={400} />
                <Image src={WhiteLogo} alt='Main Logo' width={400} className='mobile_logo' />
                <AuthForm />
                <div className='remember_field'>
                    <input type='checkbox' id='remember_field' />
                    <label htmlFor='remember_field'>Remember Me</label>
                </div>
            </div>
            <div className='login_footer'>
                <p>Client Application</p>
                <small>All rights reserved by E-novation engineering Co.</small>
            </div>
        </AuthField>
    );
};

export default Login;
