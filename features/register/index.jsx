import React, { useState } from 'react';
import { Page } from "../../app/components/layout/Page";
import Logo from "../../public/assets/img/logo.svg";
import { Header } from "../../app/components/header";
import { Screen } from "../../app/components/layout/Screen";
import { useRouter } from 'next/router';

export const Register = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push("/login")
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    try {
      const { name, email, password, passwordConfirm } = formData;

      // Verifique se a senha e a confirmação de senha coincidem
      if (password !== passwordConfirm) {
        alert('A senha e a confirmação de senha não coincidem.');
        return;
      }

      // Enviar os dados de registro para a API
      const response = await fetch('/api/registrarUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        // Registro bem-sucedido, você pode redirecionar para a página de login ou fazer algo mais
        handleClick()
        alert('Registro bem-sucedido! Você pode fazer login agora.');
      } else {
        alert('Erro ao registrar o usuário.');
      }
    } catch (error) {
      console.error('Erro ao registrar o usuário:', error);
      alert('Erro no servidor ao registrar o usuário.');
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
              id=""
              placeholder='Nome'
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              className='text-white outline-none outline-[#DEAB14] w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10 mt-4'
              type="text"
              name="email"
              id=""
              placeholder='E-mail'
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              className='text-white outline-none outline-[#DEAB14] mt-4 w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10'
              type="password"
              name="password"
              id=""
              placeholder='Senha'
              value={formData.password}
              onChange={handleInputChange}
            />
            <input
              className='text-white outline-none outline-[#DEAB14] mt-4 w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10'
              type="password"
              name="passwordConfirm"
              id=""
              placeholder='Confirmar senha'
              value={formData.passwordConfirm}
              onChange={handleInputChange}
            />
          </div>
          <button className="bg-[#D5A518] w-44 h-10 rounded-[20px] mt-6 hover:bg-[#EFCA5D] text-whi" onClick={handleRegister}>
            Cadastrar-se
          </button>
        </Screen>
      </Page>
    </div>
  );
};
