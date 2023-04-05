import Head from "next/head"
import {Hours} from "../features/hours"

export default function HoursPage() {
  return (
    <div >
          <Head>
            <title>ELBUS: Horarios</title>
            <meta name="keywords" content="onibus,trasporte,publico"/>
            <meta name="description" content="App para ajudar com o tranporte público"/>
        </Head>
        <Hours/>
    </div>
  )
}