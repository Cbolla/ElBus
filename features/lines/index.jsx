import { useMemo, useState, useEffect } from 'react';
import { Page } from './../../app/components/layout/Page';
import { Screen } from './../../app/components/layout/Screen';
import { Header } from './../../app/components/header';
import { CardSecundary } from './../../app/components/Cards/CardSecundary';
import Search from "../../public/assets/icons/search-icon.svg";

export const Lines = () => {
  const [linhas, setLinhas] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const filterSearch = useMemo(() => {
    !searchValue && linhas;
    const term = searchValue.toLowerCase();

    const contains = (str) => str.toLowerCase().indexOf(term) !== -1;

    return linhas?.filter((p) => {
      return contains(p.local) || contains(p.destino);
    });
  }, [searchValue, linhas]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sheetsu.com/apis/v1.0su/605f776845cf');
        
        const data = await response.json();

        if (Array.isArray(data)) {
          setLinhas(data);
          
        } else {
          console.error('Invalid data format. Expected an array.');
        }
      } catch (error) {
        console.error(error);
      }
      
      
    };
    
    fetchData();
  }, []);
  return (
    <div>
      <Page>
        <Screen>
          <Header menu="" logo="true" />
          <h1 className="text-white mt-6 text-xl">LINHAS, ROTAS E HORÁRIOS</h1>
          <div className="w-full flex flex-col items-center justify-center">
            <input
              onChange={handleSearch}
              value={searchValue}
              className="relative text-white focus:outline-none mt-4 pl-4 w-[80%] h-[50px] rounded-[25px] bg-[#26292F]"
              type="text"
              name="search"
              id="search"
              placeholder="Pesquique Aqui..."
            />

            <img className="absolute ml-[60%] mt-3" src={Search.src} alt="Lupa" />
          </div>
          <p className="text-white mt-4 mb-2">======Selecione a linha desejada======</p>
          <div className="ml-3 w-full flex flex-col items-center h-full overflow-y-scroll">
            {filterSearch?.map((p, indice) => {
              return <CardSecundary indice={indice} line={p.linha} localization={p.local} destiny={p.destino} mt={"2"} />;
            })}
          </div>
        </Screen>
      </Page>
    </div>
  );
};
