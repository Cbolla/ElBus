const sheetdb = require("sheetdb-node");
import { React, useMemo, useState, useEffect } from 'react'
import { Page } from './../../app/components/layout/Page';
import { Screen } from './../../app/components/layout/Screen';
import { Header } from './../../app/components/header';
import { CardSecundary } from './../../app/components/Cards/CardSecundary';
import Search from "../../public/assets/icons/search-icon.svg"

const client = sheetdb({ address: 'ko22hgud347gh',auth_login: '1wu6dwvj',
auth_password: 'smzidxxk452t2t60cqiz'});

  export const Lines = () => {

    const [linhas,setLinhas] = useState([])
    const [searchValue, setSearchValue] = useState("");
    
    const handleSearch = (e) => {
      setSearchValue(e.target.value)
    }

    const filterSearch = useMemo(() => {
      !searchValue && linhas
      const term = searchValue.toLowerCase();
    
      const contains = (str) =>
        str.toLowerCase().indexOf(term) !== -1;

      return linhas?.filter((p) => {
        return contains(p.local) || contains(p.destino);})
    
      }, [searchValue,linhas])

      //coletar dados
      useEffect(()=>{
        const coletar = async () => {
          let dataReturn
          await client.read()
            .then((data)=>{
            dataReturn = data
          })
          return dataReturn
        
        }
        coletar().then((data)=>{
          setLinhas(JSON.parse(data))
        }
      )
      },[])
    return (
      <div>
        <Page>
          <Screen>
            <Header menu="" logo="true" />
            <h1 className="text-white mt-6 text-xl">LINHAS, ROTAS E HORÁRIOS</h1>
            <div className='w-full flex flex-col items-center justify-center'>
              <input onChange={handleSearch} value={searchValue} className='relative text-white focus:outline-none mt-4 pl-4 w-[80%] h-[50px] rounded-[25px] bg-[#26292F]' type="text" name="search" id="search" placeholder="Pesquique Aqui..." />

              <img className='absolute ml-[60%] mt-3' src={Search.src} alt="Lupa" />
            </div>
            <p className="text-white mt-4 mb-2">======Selecione a linha desejada======</p>
            <div className='ml-3 w-full flex flex-col items-center h-full overflow-y-scroll'>
              {
                filterSearch?.map((p,indice) => {
                  console.log(p)
                  return <CardSecundary indice={indice} line={p.linha} localization={p.local}destiny={p.destino} mt={"2"} />
                  
                })
              }

            </div>
          </Screen>
        </Page>
      </div>
    )
  }
