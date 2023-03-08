/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <link rel='shortcut icon' href='/src/assets/images/favicon.ico' />
                <title>E-NOVATION | Engineering Company</title>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
