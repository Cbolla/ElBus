import React, { useContext, useEffect, useState } from 'react';
import { Page } from '../../app/components/layout/Page';
import { Screen } from '../../app/components/layout/Screen';
import { Header } from '../../app/components/header';
import { useRouter } from 'next/router';

export const Perfil = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/trocarsenha");
  }

  // Defina um estado local para armazenar as informações do usuário
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Recupere os dados do usuário do localStorage
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setUser(userData);
    }
  }, []);

  return (
    <div>
      <Page>
        <Screen>
          <Header menu="" logo="true" />
          {/* <div className='rounded-full mt-4 w-36 h-36 bg-white flex justify-center items-center'>a</div> */}

          {user ? (
            <div className='flex justify-center items-center w-[90%] flex-col'>
              {/* <label className='flex justify-center items-center text-white outline-none outline-[#DEAB14] w-[90%] h-auto min-h-[48px] border-none rounded-[20px] bg-[#26292F] mt-6'>
                {user.name}
              </label> */}

              <label className='flex justify-center items-center text-white outline-none outline-[#DEAB14] w-[90%] h-auto min-h-[48px] border-none rounded-[20px] bg-[#26292F] mt-20'>
                {user.email}
              </label>
            </div>
          ) : (
            <p>Usuário não autenticado.</p>
          )}

          <button className="bg-[#D5A518] w-44 h-12 rounded-[20px] mt-20 hover:bg-[#EFCA5D] text-white " onClick={handleClick}>
            Alterar Senha
          </button>
          <button className="bg-[#D5A518] w-44 h-12 rounded-[20px] mt-6 hover.bg-[#EFCA5D] text-white " onClick={handleClick}>
            Excluir conta
          </button>
        </Screen>
      </Page>
    </div>
  );
}
