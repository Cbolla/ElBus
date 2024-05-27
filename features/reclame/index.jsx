import React, { useState } from 'react';
import { Page } from '../../app/components/layout/Page';
import { Screen } from '../../app/components/layout/Screen';
import { Header } from './../../app/components/header';

export const Reclame = () => {
  const [formData, setFormData] = useState({
    reclame_titulo: '',
    reclame_texto: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const { reclame_titulo, reclame_texto } = formData;

    // Verifica se algum dos campos está vazio
    if (!reclame_titulo || !reclame_texto) {
      setError('Ambos os campos devem estar preenchidos');
      return;
    }

    try {
      const response = await fetch('/api/registrarReclamacao', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reclame_titulo, reclame_texto }),
      });

      if (response.ok) {
        setMessage('Sua reclamação foi registrada com sucesso!');
        setFormData({ reclame_titulo: '', reclame_texto: '' }); // Limpa os campos após o envio
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || 'Erro ao registrar reclamação');
      }
    } catch (error) {
      console.error('Erro ao registrar reclamação:', error);
      setMessage('Erro no servidor');
    }
  };

  return (
    <div>
      <Page>
        <Screen>
          <Header menu="" logo="true"></Header>
          <div className="flex flex-col items-center w-full mt-6">
            <h1 className='text-white text-[25px]'>Reclame Aqui</h1>

            <input
              className='text-white outline-none outline-[#DEAB14] w-[90%] h-12 border-none rounded-[20px] bg-[#26292F] pl-10 mt-6'
              type="text"
              name="reclame_titulo"
              value={formData.reclame_titulo}
              onChange={handleInputChange}
              placeholder='Reclame Aqui'
            />

            <textarea
              className='p-4 pl-10 pr-10 resize-none whitespace-normal text-white outline-none outline-[#DEAB14] mt-8 w-[90%] h-52 border-none rounded-[20px] bg-[#26292F]'
              name="reclame_texto"
              value={formData.reclame_texto}
              onChange={handleInputChange}
              placeholder='Digite o que está acontecendo aqui.'
            />

            <button
              className="bg-[#D5A518] w-44 h-12 rounded-[20px] mt-6 hover:bg-[#EFCA5D] text-white"
              onClick={handleSubmit}
            >
              Enviar Reclamação
            </button>
            {error && <p className="mt-2 text-red-500">{error}</p>}
            {message && <p className="mt-2 text-white">{message}</p>}
          </div>
        </Screen>
      </Page>
    </div>
  );
};

export default Reclame;
