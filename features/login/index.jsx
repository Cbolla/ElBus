import { Page } from "../../app/components/layout/Page"
import Logo from "../../public/assets/img/logo.svg"
import { Screen } from "../../app/components/layout/Screen"
import { useRouter } from 'next/router'
// import { login } from '../../db/consultaLogin.js'; // Importe sua função de login
import { useState } from "react";

export const Login = () => {


  const router = useRouter();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let handleClick = () => {
    router.push("/register");
  }
  let handleClickd = () => {
    router.push("/dashboard");
  }

 const handleLogin = async () => {
    try {
      const { username, password } = formData;
      const isAuthenticated = await login(username, password);

      if (isAuthenticated) {
        // Redirecionar para a página de dashboard após o login bem-sucedido
        router.push('/dashboard');
      } else {
        setErrorMessage('Credenciais inválidas');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setErrorMessage('Erro no servidor');
    }
  };

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
            <button className="bg-[#D5A518] w-44 h-10 rounded-[20px] mt-6 hover:bg-[#EFCA5D]" onClick={handleClickd}>
              Logar
            </button>
        </Screen>
      </Page>
    </div>
  )
}
