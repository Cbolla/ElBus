import React, { useState } from 'react';
import { Page } from "../../app/components/layout/Page";
import Logo from "../../public/assets/img/logo.svg";
import { Header } from "../../app/components/header";
import { Screen } from "../../app/components/layout/Screen";
import { useRouter } from 'next/router';

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    const { name, email, password, passwordConfirm } = formData;

    if (password !== passwordConfirm) {
      setErrorMessage('As senhas não coincidem');
      return;
    }

    try {
      const response = await fetch('/api/registrarUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        router.push('/login');
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Erro ao registrar');
      }
    } catch (error) {
      console.error('Erro ao registrar:', error);
      setErrorMessage('Erro no servidor');
    }
  };

  return (
    <div>
      <Page>
        <Screen>
          <Header img={Logo.src} menu="" logo="" />
          <img className='w-[200px]' src={Logo.src} alt="Logo do Aplicativo" />
          <div className="flex flex-col items-center mt-10 w-full">
            <input
              className='text-white outline-none outline-[#DEAB14] w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10'
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder='Nome'
            />
            <input
              className='text-white outline-none outline-[#DEAB14] w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10 mt-4'
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder='E-mail'
            />
            <input
              className='text-white outline-none outline-[#DEAB14] mt-4 w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10'
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder='Senha'
            />
            <input
              className='text-white outline-none outline-[#DEAB14] mt-4 w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10'
              type="password"
              name="passwordConfirm"
              value={formData.passwordConfirm}
              onChange={handleInputChange}
              placeholder='Confirmar senha'
            />
          </div>
          {errorMessage && <p className="mt-4 text-red-500">{errorMessage}</p>}
          <button className="bg-[#D5A518] w-44 h-10 rounded-[20px] mt-6 hover:bg-[#EFCA5D] text-whi" onClick={handleRegister}>
            Cadastrar-se
          </button>
        </Screen>
      </Page>
    </div>
  );
};
