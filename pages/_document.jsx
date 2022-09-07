import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
                <meta name="theme-color" content="#000000" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}