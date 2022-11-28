import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Aplicativo multiplataforma para informaçôes sobre o transporte público"/>
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
                <meta property="og:site_name" content="ELBUS" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}