import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="../public/manifest.json" />
        <link rel="apple-touch-icon" href="" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}