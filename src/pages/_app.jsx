/* eslint-disable vars-on-top */
/* eslint-disable no-inner-declarations */
import { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import Head from 'next/head';
import Store from '@/src/state-manager/store';
import NProgress from 'nprogress';
import Router from 'next/router';
import 'nprogress/nprogress.css';

// Config
import ThemeConfig from '../configs/theme';

// Assets
import '../assets/styles/global/general.css';

// Component
import Loader from '../components/layout/loader';
import AppInstallModal from '../components/layout/app-install-button';

NProgress.configure({
    minimum: 0.3,
    easing: 'ease',
    speed: 800,
    showSpinner: false
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

var displayMode = '';
if (typeof window !== 'undefined' && localStorage.getItem('userInfo')) {
    window.addEventListener('DOMContentLoaded', async () => {
        if (window.matchMedia('(display-mode: standalone)').matches) {
            displayMode = 'fullscreen';
        }
        await navigator.getInstalledRelatedApps();
    });
}

function MyApp({ Component, pageProps }) {
    const [loader, setLoader] = useState(true);
    const [domLoaded, setDomloaded] = useState(false);

    useEffect(() => {
        setDomloaded(true);
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    }, []);

    return (
        <Provider store={Store}>
            <ThemeProvider theme={ThemeConfig}>
                <Toaster
                    position='bottom-left'
                    containerStyle={{
                        zIndex: 9999
                    }}
                />
                {loader && <Loader />}
                {domLoaded && displayMode !== 'fullscreen' && !localStorage.getItem('PWA-status') && <AppInstallModal />}
                <Head>
                    <title>E-NOVATION | Engineering Company</title>
                </Head>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
}

export default MyApp;
