import {Register} from "../features/register"
import Head from "next/head"

export default function RegisterPage() {
  return (
    <div>
        <Head>
          <title>ELBUS: Cadastrar-se</title>
          <meta name="keywords" content="onibus,trasporte,publico"/>
          <meta name="description" content="App para ajudar com o tranporte público"/>
        </Head>
        <Register/>
    </div>
  )
}
