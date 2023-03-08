import { Fragment, useContext, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import AuthContext from '../store/AuthContext';
import { Global } from '@/constants/Global';

function FirstPage() {
    const router = useRouter();
    const { setAuthRef } = useContext(AuthContext);
    if (Global?.user !== undefined) {
    }
    function RedirectPage() {
        if (typeof window !== 'undefined') {
            // const cash = localStorage.getItem("user");
            const cash = null;
            if (cash !== null) {
                setAuthRef(cash);
                Global.user = JSON.parse(cash);
                router.push('./home');
            } else {
                router.push('/login');
            }
        }
    }
    useEffect(() => {
        RedirectPage();
    }, []);
    return (
        <Fragment>
            <Head>
                <title>E-novation</title>
                <meta name='description' content='me and saba' />
            </Head>
            <div>redirecting ...</div>
        </Fragment>
    );
}

export default FirstPage;
