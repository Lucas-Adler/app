import { useState } from "react";

import image01 from "../Images/Iso-office-2.png"
import SlideOver from '../Content/Slide-Over'
import Button from '../Content/Button'
import { scrollToSection } from '../utils/scrollTo'


export default function Home() {

   // eslint-disable-next-line no-unused-vars
  const [isOpen, setIsOpen] = useState(false);
  const [isHeadlessOpen, setIsHeadlessOpen] = useState(false);

  return( 
      <div className=" bg-secondary-50 dark:bg--900">
      <section className="
      flex items-center 
      justify-evenly
      lg:max-w-[100%] lg:mx-auto max-w-full
      px-[8%] flex-wrap w-full py-[15%] h-dvh
      font-display pb-[20%] bg-secondary-50 dark:bg-secondary-900
      bg-grain dark:bg-grain snap-start" id="Home">
        <div className="flex flex-col max-w-[310px]">

            <div id='text-home' className="text-center dark:text-primary-500">
            <h2 className="text-2xl font-clashRegular pt-12 pl-3 text-left">Bem Vindo ao</h2>
            <h1 className="text-5xl font-clashSemi pb-5">EficientEdu!</h1>
            <h2 className="text-xl font-clashRegular pl-3 text-left">Veja como vidro, orientação e brises mudam o desempenho de um ambiente</h2>
            <p className="font-display text-secondary-500 dark:text-secondary-400 pt-4 pb-4 leading-tight text-left pl-3">
           Simulador gratuito do LabCon/UFSC. Escolha os parâmetros, clique em simular e compare os resultados em segundos — direto no navegador, sem instalação.
              </p>
            </div>

            <div id='buttton-home' className="pb-14 mx-auto">
            <a href="#Sim" className="mx-auto" onClick={e => scrollToSection(e, 'Sim')}>
            <button className="mt-5 mb-2  mx-auto h-12 w-64  font-clashBold text-2xl tracking-wider border bg-primary-50
            hover:bg-primary-500 hover:text-primary-100 hover:transition hover:ease-in hover:duration-200 
            hover:shadow-md rounded 
            dark:bg-primary-500 dark:border-primary-300
            " href="#Sim">Começe Agora!</button></a>
            <br/> 
            <a className="text-sm italic text-secondary-500 dark:text-secondary-400 mx-auto" > Gratuito · sem cadastro · desenvolvido no PósARQ/UFSC </a>
            <br/> 
            <a onClick={() => setIsHeadlessOpen(true)} className="italic text-primary-500 mx-auto cursor-pointer">Saiba Mais →</a> 
           
           
            </div>
        </div>
        <div className="col-start-2 ">
          <img src={image01} className="justify-self-end invisible lg:relative md:inset-0 lg:visible max-w-full lg:max-w-lg lg:mr-12" alt="logo" />
        </div>
         <SlideOver 
                open={isHeadlessOpen}
                setOpen={setIsHeadlessOpen}
                title="Sobre"
              >
                <div className="flex flex-col z-100">
                  O aplicativo foi desenvolvido utilizando um banco de dados previamente configurado, tendo a simulação feita a partir do software EnergyPlus, com os seguintes parâmetros e grandezas:
                  <a>
                  <a className="font-clashSemi">Dimensões</a>
                  <br></br>
                  4m x 6m (24m²)
                  <br></br>
                  Pé direito: 3m
                  <br></br>
                  <a className="font-clashSemi">Materiais</a>
                  <br></br>
                  Paredes: Alvenaria Bloco de Concreto (U = 2,26 W/m². K)
                  <br></br>
                  Piso e Teto: Laje de Concreto
                  <br></br>
                  <a className="font-clashSemi">Absortância das Paredes</a>
                  <br></br>
                  0,4
                  <br></br>
                  <a className="font-clashSemi">Carga de Iluminação</a>
                  <br></br>
                  12 W/m²
                  <br></br>
                  <a className="font-clashSemi">Ocupação</a>
                  <br></br>
                  3 pessoas
                  <br></br>
                  <a className="font-clashSemi">Carga dos Equipamentos</a>
                  <br></br>
                  16 W/m²
                  <br></br>
                  <a className="font-clashSemi">Horário de Utilização</a>
                  <br></br>
                  8h às 18h - Seg - Sex
                  <br></br>
                  <a className="font-clashSemi">Infiltração de Ar</a>
                  <br></br>
                  0,6 trocas por hora
                  <br></br>
                  <a className="font-clashSemi">Renovação de Ar</a>
                  <br></br>
                  7,5 L/s/Pessoa
                  <br></br>
                  </a>

                  <Button
                    className="mt-4"
                    onClick={() => setIsHeadlessOpen(false)}
                  >
                    OK
                  </Button>
                </div>
              </SlideOver>
      </section>
      </div>

  )
}
