import { Page } from "../../app/components/layout/Page"
import Logo from "../../public/assets/img/logo.svg"
import { Screen } from "../../app/components/layout/Screen"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const Login = () => {
  const [resultado, setResultados] = useState([]);
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let handleClick = () => {
    router.push("/register");
  }

  const clearForm = () => {
    setFormData({ email: '', password: '' });
  };

  const handleLogin = async () => {
    try {
      const { email, password } = formData;
  
      // Enviar os dados de login e senha para a API
      const response = await fetch('/api/verificarLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      });
  
      if (response.ok) {
        // Redirecionar para a página de dashboard após o login bem-sucedido
        const userData = {email: email }; // Substitua isso pelos dados reais do usuário
        localStorage.setItem('userData', JSON.stringify(userData)); // Armazene os dados do usuário no localStorage
  
        router.push('/dashboard');
      } else {
        setErrorMessage('Senha ou usuário inválidos');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setErrorMessage('Erro no servidor');
    }
    finally {
      // Limpar os campos de entrada após a tentativa de login (independente do resultado)
      setTimeout(clearForm, 0);
    }
  };

  return (
    <div className=''>
      <Page>
        <Screen>
          <img className='w-[200px] mt-6' src={Logo.src} alt="Logo do Aplicativo" />
            <div className="flex flex-col items-center w-full mt-6">
              <input className='text-white outline-none outline-[#DEAB14] w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10' type="text" name="email"  placeholder='Email do Usuário' onChange={handleInputChange} value={formData.email}/>
              
              <input className='text-white outline-none outline-[#DEAB14] mt-4 w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10' type="password" name="password" placeholder='Senha do Usuario' onChange={handleInputChange} value={formData.password}/>
            </div>
            <p className="mt-4 text-[#9A9A9A] cursor-pointer select-none hover:text-white" onClick={handleClick}>Cadastrar-se</p>
            {errorMessage && (
              <p className="text-red-500 mt-2">{errorMessage}</p>
            )}
            <button className="bg-[#D5A518] w-44 h-10 rounded-[20px] mt-6 hover:bg-[#EFCA5D]" onClick={handleLogin}>
              Logar
            </button>
        </Screen>
      </Page>
    </div>
  )
}
