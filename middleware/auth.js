import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    // Verifique se o usuário está autenticado (por exemplo, com uma variável de estado)
    // const isAuthenticated=;
    
    if (!isAuthenticated) {
      // Se o usuário não estiver autenticado, redirecione para a página de login
      router.push('/login');
    }
  }, []);
};
