import Head from "next/head"
import {Lines} from "../features/lines"

export default function LoginPage() {
  return (
    <div >
          <Head>
            <title>GoBus: Login</title>
            <meta name="keywords" content="onibus,trasporte,publico"/>
            <meta name="description" content="App para ajudar com o tranporte público"/>
        </Head>
        <Lines/>
    </div>
  )
}
