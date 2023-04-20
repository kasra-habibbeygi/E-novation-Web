import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// Assets
import { LayoutField } from './layout.style';

// Component
import Navbar from './navbar';
import Aside from './aside';
import UserAside from './user-aside';
import AppInstallModal from './app-install-button';

var displayMode = '';
if (typeof window !== 'undefined' && localStorage.getItem('userInfo')) {
    window.addEventListener('DOMContentLoaded', async () => {
        if (window.matchMedia('(display-mode: standalone)').matches) {
            displayMode = 'fullscreen';
        }
        const relatedApps = await navigator.getInstalledRelatedApps();
        console.log(relatedApps);
    });
}

const LayoutProvider = ({ children }) => {
    const router = useRouter();
    const [domLoaded, setDomloaded] = useState(false);

    useEffect(() => {
        setDomloaded(true);
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
            {domLoaded && displayMode !== 'fullscreen' && !localStorage.getItem('PWA-status') && <AppInstallModal />}
        </LayoutField>
    );
};

export default LayoutProvider;
