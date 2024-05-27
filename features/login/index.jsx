import { Page } from "../../app/components/layout/Page"
import Logo from "../../public/assets/img/logo.svg"
import { Screen } from "../../app/components/layout/Screen"
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const Login = () => {
  const [usuarios, setUsuarios] = useState([]);
  const router = useRouter();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const buscarDadosDoBanco = async () => {
      try {
        const response = await fetch('/api/consultarUsuario');
        if (response.ok) {
          const data = await response.json();
          setUsuarios(data);
          console.log('Dados da consulta:', data);
        } else {
          console.error('Erro ao buscar dados:', response.statusText);
        }
      } catch (error) {
        console.error('Erro na solicitação:', error);
      }
    };

    buscarDadosDoBanco();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    const { username, password } = formData;
    const usuario = usuarios.find(u => (u.email === username || u.name === username) && u.password === password);

    if (usuario) {
      router.push('/dashboard');
    } else {
      setErrorMessage('Credenciais inválidas');
    }
  };

  return (
    <div className=''>
      <Page>
        <Screen>
          <img className='w-[200px] mt-6' src={Logo.src} alt="Logo do Aplicativo" />
          <div className="flex flex-col items-center w-full mt-6">
            <input
              className='text-white outline-none outline-[#DEAB14] w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10'
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder='Usuário ou E-mail'
            />
            <input
              className='text-white outline-none outline-[#DEAB14] mt-4 w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10'
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder='Senha'
            />
          </div>
          <p className="mt-4 text-[#9A9A9A] cursor-pointer select-none hover:text-white" onClick={() => router.push("/register")}>Cadastrar-se</p>
          <button className="bg-[#D5A518] w-44 h-10 rounded-[20px] mt-6 hover:bg-[#EFCA5D]" onClick={handleLogin}>
            Logar
          </button>
          {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
        </Screen>
      </Page>
    </div>
  );
};
