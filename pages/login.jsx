import {Login} from "../features/login"
import Head from "next/head"

export default function LoginPage() {
  return (
    <div >
        <Login/>
          <Head>
            <title>GoBus: Login</title>
            <meta name="keywords" content="onibus,trasporte,publico"/>
            <meta name="description" content="App para ajudar com o tranporte público"/>
        </Head>
    </div>
  )
}
