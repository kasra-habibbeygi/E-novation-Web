import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter();
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('token')) {
                router.push('/dashboard');
            } else {
                router.push('/login');
            }
        }
    }, [router]);

    return <></>;
};

export default Index;
