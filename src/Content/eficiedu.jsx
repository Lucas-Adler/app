/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/20/solid'
import { data } from './DataBase'
import * as recharts from 'recharts'
import office from '../Images/Iso-office-2.png'

const city = [
  { id: 1, name: 'Florianopolis - SC', code: 'Fln', unavailable: false },
  { id: 2, name: 'Salvador - BA', code: 'Ssa', unavailable: false },
  { id: 3, name: 'Belo Horizonte - MG', code: 'BH', unavailable: false }
]

const glass = [
  { id: 1, name: 'FS80', code: '0.8', unavailable: false },
  { id: 2, name: 'FS70', code: '0.7', unavailable: false },
  { id: 3, name: 'FS60', code: '0.6', unavailable: false },
  { id: 4, name: 'FS50', code: '0.5', unavailable: false },
  { id: 5, name: 'FS40', code: '0.4', unavailable: false },
  { id: 6, name: 'FS30', code: '0.3', unavailable: false }
]

const wwr = [
  { id: 1, name: '40%', code: '0.4', unavailable: false },
  { id: 2, name: '50%', code: '0.5', unavailable: false },
  { id: 3, name: '60%', code: '0.6', unavailable: false }
]

const orientation = [
  { id: 1, name: 'Norte', code: 'N', unavailable: false },
  { id: 2, name: 'Sul', code: 'S', unavailable: false },
  { id: 3, name: 'Leste', code: 'L', unavailable: false },
  { id: 4, name: 'Oeste', code: 'O', unavailable: false }
]

const brise_v = [
  { id: 1, name: '(v) sem brise', code: '0', unavaible: false },
  { id: 2, name: '(v) 4 unidades', code: '4', unavaible: false },
  { id: 3, name: '(v) 6 unidades', code: '6', unavaible: false },
  { id: 4, name: '(v) 8 unidades', code: '8', unavaible: false }
]

const brise_h = [
  { id: 1, name: '(h) sem brise', code: '0', unavaible: false },
  { id: 1, name: '(h) 10 cm', code: '10', unavaible: false },
  { id: 1, name: '(h) 20 cm', code: '20', unavaible: false },
  { id: 1, name: '(h) 30 cm', code: '30', unavaible: false }
]

export default function eficiedu() {
  // const [search, setSearc] = useState('')
  const [btnState, setBtnState] = useState(false)

  // eslint-disable-next-line no-unused-vars
  let toggleClassCheck = btnState ? 'invisible' : null

  const [selectedC, setSelectedC] = useState(0)
  const [selectedN, setSelectedN] = useState(0)
  const [selectedG, setSelectedG] = useState(0)
  const [selectedW, setSelectedW] = useState(0)
  const [selectedBV, setSelectedBV] = useState(0)
  const [selectedBH, setSelectedBH] = useState(0)

  const filteredData = data
    .filter(
      data =>
        data.city === selectedC.code &&
        data.orientacao === selectedN.code &&
        data.vidro === selectedG.code &&
        data.WWR === selectedW.code &&
        data.brisev === selectedBV.code &&
        data.briseh === selectedBH.code
    )
    .map(function (data) {
      return {
        valor: parseFloat(data.TotalElectricity),
        cidade: selectedC.name,
        vidro: selectedG.name,
        wwr: selectedW.name,
        norte: selectedN.name,
        bh: selectedBH.name,
        bv: selectedBV.name
      }
    })

  const [testData, setData] = useState([])
  const [selectedOpt, setSelectedOpt] = useState({})
  let data_02

  function handleClick() {
    'use strict'
    setBtnState(btnState => !btnState)

    data_02 = filteredData.shift()

    const newData = [...testData, data_02]
    setData(newData)
    setSelectedOpt(newData)
  }

  console.log(selectedOpt)

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">
            {'Simulação ' +
              `${label + 1} : ${payload[0].value - 1754}` +
              ' KWh/ano'}
          </p>
          <p className="intro">Valores Escolhidos: </p>
          <p className="desc">
            {`${payload[0].payload.cidade}`}
            <br />
            {`${payload[0].payload.vidro}`}
            <br />
            {`${payload[0].payload.wwr}`}
            <br />
            {`${payload[0].payload.norte}`}
            <br />
            {`${payload[0].payload.bv}`}
            <br />
            {`${payload[0].payload.bh}`}
          </p>
        </div>
      )
    }
  }

  const slideLeft = () => {
    var slider = document.getElementById('content')
    slider.scrollLeft = slider.scrollLeft - 350
  }

  const slideRight = () => {
    var slider = document.getElementById('content')
    slider.scrollLeft = slider.scrollLeft + 290
  }
  return (
    <section
      className=" lg:content-center w-full max-w-full h-[1000px] lg:justify-between pt-10 lg:mx-auto lg:max-w-[75%]  font-display "
      id="Sim"
    >
      {/* //Botao de ir para os lados */}
      <div className="flex justify-start max-w-full lg:hidden">
        <button onClick={slideLeft} className="bg-[#e8e8e8] p-2 rounded-full">
          <ChevronLeftIcon
            className="text-gray-40 h-7 w-7"
            aria-hidden="true"
          />
        </button>
        <button
          onClick={slideRight}
          className="bg-[#e8e8e8] p-2 rounded-full ml-4"
        >
          <ChevronRightIcon
            className="text-gray-40 h-7 w-7"
            aria-hidden="true"
          />
        </button>
      </div>

      {/* preciso ajustar aqui pra poder funcionar o botão de ir para os lados sem desconfigurar o grid */}
      <div
        id="content"
        className="grid grid-flow-col scrollbar-hide m-3 h-full scroll-smooth gap-4 overflow-x-auto "
      >
        {/* Seletor de parametros (usei o headless UI) */}

        <div
          id="options"
          className="flex flex-col relative h-[613px] w-fit p-4  lg:flex-none lg:col-span-1"
        >
          <div id="image">
            <img
              src={office}
              alt=""
              className=" w-[354px]  z-20 lg:pb-10 pb-5"
            />
          </div>

          <div id="city">
            <div id="Cities" className="relative my-0 pb-1 mx-8">
              <Listbox value={selectedC} onChange={setSelectedC}>
                <div className="relative py-1 ">
                  <Listbox.Button className="flex w-[300px] items-center justify-between rounded border-2 bg-primary-50 p-2 transition  hover:duration-100 hover:ease-in  lg:hover:shadow-md text-xl">
                    <span>
                      {selectedC ? (
                        selectedC.name
                      ) : (
                        <font color="grey">Selecione a Cidade</font>
                      )}
                    </span>
                    <span className="pointer-events-none relative inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="text-gray-40 h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-20 w-[300px] border-2 bg-primary-50">
                      {city.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? 'bg-amber-100 text-amber-900'
                                : 'text-gray-900'
                            }`
                          }
                          value={person}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {person.name}
                              </span>
                              {selected ? (
                                <span className="text-amber-600 absolute inset-y-0 left-0 flex items-center pl-3">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>

          <div id="glass">
            <div id="Glass" className="relative my-0 pb-1 mx-8">
              <Listbox value={selectedG} onChange={setSelectedG}>
                <div className="relative mt-1  py-1">
                  <Listbox.Button className="hover: flex w-[300px] items-center justify-between rounded border-2 bg-primary-50 p-2 transition hover:shadow-md hover:duration-100 hover:ease-in text-xl">
                    <span className="block truncate">
                      {selectedG ? (
                        selectedG.name
                      ) : (
                        <font color="grey">Selecione o tipo de Vidro</font>
                      )}
                    </span>
                    <span className="pointer-events-none relative inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="text-gray-400 h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-20 w-[300px] border-2 bg-primary-50">
                      {glass.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? 'bg-amber-100 text-amber-900'
                                : 'text-gray-900'
                            }`
                          }
                          value={person}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {person.name}
                              </span>
                              {selected ? (
                                <span className="text-amber-600 absolute inset-y-0 left-0 flex items-center pl-3">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>

          <div id="wwr">
            <div id="WWR" className="relative my-0 pb-1 mx-8">
              <Listbox value={selectedW} onChange={setSelectedW}>
                <div className="relative mt-1  py-1">
                  <Listbox.Button className="hover: flex w-[300px] items-center justify-between rounded border-2 bg-primary-50 p-2 transition hover:shadow-md hover:duration-100 hover:ease-in text-xl">
                    <span className="block truncate">
                      {selectedW ? (
                        selectedW.name
                      ) : (
                        <font color="grey">Selecione a RJP</font>
                      )}
                    </span>
                    <span className="pointer-events-none relative inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="text-gray-400 h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-20 w-[300px] border-2 bg-primary-50">
                      {wwr.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? 'bg-amber-100 text-amber-900'
                                : 'text-gray-900'
                            }`
                          }
                          value={person}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {person.name}
                              </span>
                              {selected ? (
                                <span className="text-amber-600 absolute inset-y-0 left-0 flex items-center pl-3">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>

          <div id="orientation">
            <div id="Orientation" className="relative my-0 pb-1 mx-8">
              <Listbox value={selectedN} onChange={setSelectedN}>
                <div className="relative mt-1  py-1">
                  <Listbox.Button className="hover: flex w-[300px] items-center justify-between rounded border-2 bg-primary-50 p-2 transition hover:shadow-md hover:duration-100 hover:ease-in text-xl">
                    <span className="block truncate">
                      {selectedN ? (
                        selectedN.name
                      ) : (
                        <font color="grey">Selecione a Orientação</font>
                      )}
                    </span>
                    <span className="pointer-events-none relative inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="text-gray-400 h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-20 w-[300px] border-2 bg-primary-50">
                      {orientation.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? 'bg-amber-100 text-amber-900'
                                : 'text-gray-900'
                            }`
                          }
                          value={person}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {person.name}
                              </span>
                              {selected ? (
                                <span className="text-amber-600 absolute inset-y-0 left-0 flex items-center pl-3">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>

          <div id="brise_v">
            <div id="BV" className="relative my-0 pb-1 mx-8">
              <Listbox value={selectedBV} onChange={setSelectedBV}>
                <div className="relative mt-1 py-1">
                  <Listbox.Button className="hover: flex w-[300px] items-center justify-between rounded border-2 bg-primary-50 p-2 transition hover:shadow-md hover:duration-100 hover:ease-in text-xl">
                    <span className="block truncate ">
                      {selectedBV ? (
                        selectedBV.name
                      ) : (
                        <font color="grey">Sel. o Brise Vert. (30 cm)</font>
                      )}
                    </span>
                    <span className="pointer-events-none relative inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="text-gray-40 h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-20 w-[300px] border-2 bg-primary-50">
                      {brise_v.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? 'bg-amber-100 text-amber-900'
                                : 'text-gray-900'
                            }`
                          }
                          value={person}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {person.name}
                              </span>
                              {selected ? (
                                <span className="text-amber-600 absolute inset-y-0 left-0 flex items-center pl-3">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>
          <div id="brise_h">
            <div id="BH" className="relative my-0 pb-5 mx-8">
              <Listbox value={selectedBH} onChange={setSelectedBH}>
                <div className="relative mt-1 py-1">
                  <Listbox.Button className=" flex w-[300px] items-center justify-between rounded border-2 bg-primary-50 p-2 transition hover:shadow-md hover:duration-100 hover:ease-in text-xl">
                    <span className="block truncate">
                      {selectedBH ? (
                        selectedBH.name
                      ) : (
                        <font color="grey">Sel. o Brise Hor. (5 un)</font>
                      )}
                    </span>
                    <span className="pointer-events-none relative inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="text-gray-40 h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-20 w-[300px] border-2 bg-primary-50">
                      {brise_h.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? 'bg-amber-100 text-amber-900'
                                : 'text-gray-900'
                            }`
                          }
                          value={person}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                {person.name}
                              </span>
                              {selected ? (
                                <span className="text-amber-600 absolute inset-y-0 left-0 flex items-center pl-3">
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>

          <button
            className=" flex w-[190px] font-display text-2xl items-center justify-center rounded border-2 bg-primary-50 py-2 transition hover:bg-secondary-300 hover:shadow-md hover:duration-100 hover:ease-in mx-auto "
            onClick={handleClick}
          >
            Simular
          </button>
        </div>

        {/* Para os gráficos usei o recharts */}
        <div className="min-w-[500px] lg:w-full relative h-[750px] rounded-lg  shadow-lg bg-[#e8e8e8] p-2 mt-8 col-span-2 lg:justify-items-stretch ">
          <recharts.ResponsiveContainer width="100%" height="100%">
            <recharts.BarChart
              data={testData}
              margin={{
                top: 25,
                right: 20,
                left: 20,
                bottom: 25
              }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5eead4" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#5eead4" stopOpacity={0} />
                </linearGradient>
              </defs>
              <recharts.CartesianGrid strokeDasharray="3 3" />

              <recharts.Tooltip
                content={<CustomTooltip />}
                animationEasing="ease-in-out"
              />
              <recharts.Bar
                dataKey="valor"
                type="monotone"
                fill="url(#colorUv)"
                fillOpacity={1}
                stroke="black"
                strokeWidth={1}
              />
            </recharts.BarChart>
          </recharts.ResponsiveContainer>
        </div>

        {/* uma segunda ou terceira coluna, talvez um popUp com o modelo a ser simulado */}

        {/* Aqui penso em apresentar os resultados em uma tabela */}
        {/* <div className=" flex flex-col lg:flex-row max-w-full w-full lg:order-3 m-6 p-4 shadow-lg rounded bg-[#e8e8e8]">
        resultados
      </div> */}
      </div>
    </section>
  )
}
