import { React, useMemo, useState } from 'react'
import { Page } from './../../app/components/layout/Page';
import { Screen } from './../../app/components/layout/Screen';
import { Header } from './../../app/components/header';
import { CardSecundary } from './../../app/components/Cards/CardSecundary';
import Search from "../../public/assets/icons/search-icon.svg"

const MockedSearch = [
  {
    line: "Linha 01",
    localization: "Angatuba",
    destiny: "Itapetininga",
    mt: "2"
  },
  {
    line: "Linha 02",
    localization: "Itapetininga",
    destiny: "Angatuba",
    mt: "2"
  },
  {
    line: "Linha 03",
    localization: "Bom Retiro",
    destiny: "Itapeva",
    mt: "2"
  },
  {
    line: "Linha 04",
    localization: "Retiro",
    destiny: "Goiás",
    mt: "2"
  },
  {
    line: "Linha 05",
    localization: "Recha",
    destiny: "Guarei",
    mt: "2"
  },
  {
    line: "Linha 01",
    localization: "Angatuba",
    destiny: "Itapetininga",
    mt: "2"
  },
  {
    line: "Linha 02",
    localization: "Itapetininga",
    destiny: "Angatuba",
    mt: "2"
  },
  {
    line: "Linha 03",
    localization: "Bom Retiro",
    destiny: "Itapeva",
    mt: "2"
  },
  {
    line: "Linha 04",
    localization: "Retiro",
    destiny: "Goiás",
    mt: "2"
  },
  {
    line: "Linha 05",
    localization: "Recha",
    destiny: "Guarei",
    mt: "2"
  },
]


  export const Lines = () => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (e) => {
      setSearchValue(e.target.value)
    }

    const filterSearch = useMemo(() => {
      !searchValue && MockedSearch
      const term = searchValue.toLowerCase();
    
      const contains = (str) =>
        str.toLowerCase().indexOf(term) !== -1;
    
      return MockedSearch.filter((p) => {
        return contains(p.destiny) || contains(p.localization);})
    
      }, [searchValue])




    return (
      <div>
        <Page>
          <Screen>
            <Header menu="true" logo="true" />
            <h1 className="text-white mt-6 text-xl">LINHAS, ROTAS E HORÁRIOS</h1>
            <div className='w-full flex flex-col items-center justify-center'>
              <input onChange={handleSearch} value={searchValue} className='relative text-white focus:outline-none mt-4 pl-4 w-[80%] h-[50px] rounded-[25px] bg-[#26292F]' type="text" name="search" id="search" placeholder="Pesquique Aqui..." />

              <img className='absolute ml-[60%] mt-3' src={Search.src} alt="Lupa" />
            </div>
            <p className="text-white mt-4 mb-2">======Selecione a linha desejada======</p>
            <div className='ml-3 w-full flex flex-col items-center h-full overflow-y-scroll'>
              {
                filterSearch.map((p) => {
                  return <CardSecundary line={p.line} localization={p.localization} destiny={p.destiny} mt={p.mt} />
                })
              }

            </div>
          </Screen>
        </Page>
      </div>
    )
  }
