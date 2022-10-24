import { Page } from "../../app/components/layout/Page"
import Logo from "../../public/assets/img/logo.svg"
import Google from "../../public/assets/icons/google-icon.svg"
import { Screen } from "../../app/components/layout/Screen"
import { useRouter } from 'next/router'
import {app} from "../../services/firebase"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

export const Login = () => {
const auth = getAuth(app);

const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        router.push("/dashboard")
      
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
}

  const router = useRouter()

  let handleClick = () => {
    router.push("/register");
  }

  const handleDashboard = (e)=>{
    router.push("/dashboard")  
  }


  return (

    <div className=''>
      <Page>
        <Screen>
          <img className='w-[200px] mt-6' src={Logo.src} alt="Logo do Aplicativo" />
            <div className="flex flex-col items-center w-full mt-6">
              <input className='text-white outline-none outline-[#DEAB14] w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10' type="text" name="name" id="" placeholder='Usuário ou E-mail' />
              
              <input className='text-white outline-none outline-[#DEAB14] mt-4 w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10' type="password" name="password" id="" placeholder='Senha' />
            </div>
            <p className="mt-4 text-[#9A9A9A] cursor-pointer select-none hover:text-white" onClick={handleClick}>Cadastrar-se</p>
            <button className="bg-[#D5A518] w-44 h-10 rounded-[20px] mt-6 hover:bg-[#EFCA5D]" onClick={()=>{}}>
              Logar
            </button>
            <img onClick={signInGoogle} className='cursor-pointer mt-8' src={Google.src} alt="Conta Google" />
        </Screen>
      </Page>
    </div>
  )
}
