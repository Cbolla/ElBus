import {Login} from "../features/login"
import Head from "next/head"

export default function DashboardPage() {
  return (
    <div>
      <Head>
        <title>ELBUS: DashBoard</title>
        <meta name="keywords" content="onibus,trasporte,publico"/>
        <meta name="description" content="App para ajudar com o tranporte público"/>
      </Head>
      <Login/>
    </div>
  )
}
