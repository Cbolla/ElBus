import React, { useState } from 'react';
import { Page } from '../../app/components/layout/Page';
import { Screen } from '../../app/components/layout/Screen';
import { Header } from '../../app/components/header';
import Logo from '../../public/assets/img/logo.svg';

export const TrocarSenha = () => {
  const [senhaAntiga, setSenhaAntiga] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [error, setError] = useState('');

  const handleTrocarSenha = async () => {
    try {
      if (!senhaAntiga || !novaSenha) {
        setError('Preencha ambas as senhas.');
        return;
      }

      const userEmail = localStorage.getItem('email');
      if (!userEmail) {
        setError('Email não encontrado no localStorage.');
        return;
      }

      const response = await fetch('/api/trocarSenha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          senhaAntiga,
          novaSenha,
        }),
      });

      if (response.ok) {
        alert('Senha trocada com sucesso!');
      } else {
        const data = await response.json();
        setError(`Erro ao trocar a senha: ${data.error}`);
      }
    } catch (error) {
      console.error('Erro ao trocar a senha:', error);
      setError('Erro interno ao trocar a senha.');
    }
  };

  return (
    <div>
      <Page>
        <Screen>
          <Header img={Logo.src} menu="true" logo="true" />
          <h1 className="text-white text-[25px] mt-4">Trocar a Senha</h1>
          <input
            className="text-white outline-none outline-[#DEAB14] w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10 mt-8"
            type="password"
            placeholder="Senha Atual"
            value={senhaAntiga}
            onChange={(e) => setSenhaAntiga(e.target.value)}
          />
          <input
            className="text-white outline-none outline-[#DEAB14] w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10 mt-6"
            type="password"
            placeholder="Nova Senha"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />
          <button
            className="bg-[#D5A518] w-44 h-12 rounded-[20px] mt-6 hover:bg-[#EFCA5D] text-white"
            onClick={handleTrocarSenha}
          >
            Trocar de senha
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </Screen>
      </Page>
    </div>
  );
};
