import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Assets
import { LayoutField } from './layout.style';

// Component
import Navbar from './navbar';
import Aside from './aside';
import UserAside from './user-aside';

const LayoutProvider = ({ children }) => {
    const router = useRouter();
    useEffect(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('userInfo') === null) {
            router.push('/login');
        }
    }, [router]);

    return (
        <LayoutField>
            <Navbar />
            <Aside />
            <UserAside />
            <section className='page_content_field'>{children}</section>
        </LayoutField>
    );
};

export default LayoutProvider;
