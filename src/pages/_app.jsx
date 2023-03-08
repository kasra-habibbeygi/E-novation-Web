import { ThemeProvider } from '@emotion/react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import Store from '@/src/state-manager/store';
import NProgress from 'nprogress';
import Router from 'next/router';
import 'nprogress/nprogress.css';

// Config
import ThemeConfig from '../configs/theme';

// Assets
import '../assets/styles/global/general.css';

NProgress.configure({
    minimum: 0.3,
    easing: 'ease',
    speed: 800,
    showSpinner: false
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={Store}>
            <ThemeProvider theme={ThemeConfig}>
                <Toaster
                    position='bottom-left'
                    containerStyle={{
                        zIndex: 9999
                    }}
                />
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
}

export default MyApp;
