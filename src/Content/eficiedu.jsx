/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon,
  ArrowDownTrayIcon
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
  const [activeTab, setActiveTab] = useState('options')
  const [resultsView, setResultsView] = useState('chart')

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
    setActiveTab('chart')
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

  const tableRows = testData.filter(Boolean)

  function downloadCSV() {
    const header = [
      'Simulação',
      'Cidade',
      'Vidro',
      'WWR',
      'Orientação',
      'Brise Vertical',
      'Brise Horizontal',
      'Consumo (kWh/ano)'
    ]
    const lines = tableRows.map((row, i) =>
      [
        i + 1,
        row.cidade,
        row.vidro,
        row.wwr,
        row.norte,
        row.bv,
        row.bh,
        (row.valor - 1754).toFixed(0)
      ].join(';')
    )
    const csv = ['﻿' + header.join(';'), ...lines].join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'resultados-eficiedu.csv'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <section
      className="lg:content-center w-full max-w-full h-dvh py-0.5
      lg:justify-evenly lg:mx-auto lg:max-w-[100%] font-display 
      bg-secondary-300  rounded-3xl relative z-20
      dark:bg-secondary-800 bg-grain snap-start scroll-mt-[68px]"
      id="Sim"
    >
      {/*<img id="line" src="/Line.svg" className='relative mx-auto mt-[-30px] z-20'/>
      <img id="Rectangle" src="/Rectangle.svg" className='relative mx-auto mt-[-22px] z-10 w-[160px]' />
      */}

      {/* Abas para alternar entre parâmetros e gráfico no mobile */}
      <div className="flex gap-2 mx-5 pt-2 max-w-full lg:hidden ">
        <button
          onClick={() => setActiveTab('options')}
          className={`flex-1 rounded-full py-2 text-sm font-semibold transition ${
            activeTab === 'options'
              ? 'bg-primary-500 text-primary-50'
              : 'bg-primary-50 text-primary-700 dark:bg-secondary-700 dark:text-primary-200'
          }`}
        >
          Parâmetros
        </button>
        <button
          onClick={() => setActiveTab('chart')}
          className={`flex-1 rounded-full py-2 text-sm font-semibold transition ${
            activeTab === 'chart'
              ? 'bg-primary-500 text-primary-50'
              : 'bg-primary-50 text-primary-700 dark:bg-secondary-700 dark:text-primary-200'
          }`}
        >
          Resultados
        </button>
      </div>

      <div
        id="content"
        className="grid grid-flow-col scrollbar-hide mx-5 m-10 h-5/6
        scroll-smooth gap-4 overflow-x-auto bg-secondary-200 rounded-3xl
        dark:bg-secondary-700"
      >
        {/* Seletor de parametros (usei o headless UI) */}

        <div
          id="options"
          className={`${
            activeTab === 'options' ? 'flex' : 'hidden'
          } lg:flex flex-col relative h-[613px] w-fit py-4 lg:flex-none lg:col-span-1`}
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
                  <Listbox.Button className="flex w-[300px] items-center justify-between border rounded bg-primary-50 dark:bg-secondary-300 p-2 transition  hover:duration-100 hover:ease-in  lg:hover:shadow-md text-xl">
                    <span>
                      {selectedC ? (
                        selectedC.name
                      ) : (
                        <font color="gray">Selecione a Cidade</font>
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
                    <Listbox.Options className="absolute z-20 w-[300px] border rounded bg-primary-50">
                      {city.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4  dark:bg-secondary-300 dark:hover:bg-primary-500 hover:bg-primary-200 ${
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
                  <Listbox.Button className="hover: flex w-[300px] items-center justify-between border rounded bg-primary-50 dark:bg-secondary-300 p-2 transition hover:shadow-md hover:duration-100 hover:ease-in text-xl">
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
                    <Listbox.Options className="absolute z-20 w-[300px] border rounded bg-primary-50">
                      {glass.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 rounded dark:bg-secondary-300 dark:hover:bg-primary-500 hover:bg-primary-200 ${
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
                  <Listbox.Button className="hover: flex w-[300px] items-center justify-between border rounded bg-primary-50 dark:bg-secondary-300 p-2 transition hover:shadow-md hover:duration-100 hover:ease-in text-xl">
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
                    <Listbox.Options className="absolute z-20 w-[300px] border rounded bg-primary-50">
                      {wwr.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 rounded dark:bg-secondary-300 dark:hover:bg-primary-500 hover:bg-primary-200 ${
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
                  <Listbox.Button className="hover: flex w-[300px] items-center justify-between border rounded bg-primary-50 dark:bg-secondary-300 p-2 transition hover:shadow-md hover:duration-100 hover:ease-in text-xl">
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
                    <Listbox.Options className="absolute z-20 w-[300px] border rounded bg-primary-50">
                      {orientation.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 rounded dark:bg-secondary-300 dark:hover:bg-primary-500 hover:bg-primary-200 ${
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
                  <Listbox.Button className="hover: flex w-[300px] items-center justify-between border rounded bg-primary-50 dark:bg-secondary-300 p-2 transition hover:shadow-md hover:duration-100 hover:ease-in text-xl">
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
                    <Listbox.Options className="absolute z-20 w-[300px] border rounded bg-primary-50 ">
                      {brise_v.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 rounded dark:bg-secondary-300 dark:hover:bg-primary-500 hover:bg-primary-200 ${
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
                  <Listbox.Button className=" flex w-[300px] items-center justify-between border rounded bg-primary-50 dark:bg-secondary-300 p-2 transition hover:shadow-md hover:duration-100 hover:ease-in text-xl">
                    <span className="block truncate ">
                      {selectedBH ? (
                        selectedBH.name
                      ) : (
                        <font color="grey">Sel. o Brise Hor. (5 un)</font>
                      )}
                    </span>
                    <span className="pointer-events-none relative inset-y-0 right-0 flex items-center pr-2 ">
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
                    <Listbox.Options className="absolute z-20 w-[300px] border rounded bg-primary-50">
                      {brise_h.map((person, personIdx) => (
                        <Listbox.Option
                          key={personIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 rounded dark:bg-secondary-300 dark:hover:bg-primary-500 hover:bg-primary-200 ${
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
            className=" flex w-[190px] font-display text-2xl items-center justify-center rounded border
             bg-primary-50 py-2 transition hover:bg-primary-500 hover:text-primary-100
             dark:bg-primary-500 dark:border-primary-300
             hover:shadow-md hover:duration-100 hover:ease-in mx-auto "
            onClick={handleClick}
          >
            Simular
          </button>
        </div>

        {/* Para os gráficos usei o recharts, com uma tabela como visão alternativa */}
        <div
          className={`${
            activeTab === 'chart' ? 'flex' : 'hidden'
          } lg:flex w-full lg:w-full lg:min-w-[500px] flex-col relative h-[750px] p-2 mt-8  col-span-2 lg:justify-items-stretch`}
        >
          <div className="flex items-center justify-between gap-2 pb-2">
            <div className="flex gap-2">
              <button
                onClick={() => setResultsView('chart')}
                className={`rounded-full px-4 py-1 text-sm font-semibold transition ${
                  resultsView === 'chart'
                    ? 'bg-primary-500 text-primary-50'
                    : 'bg-primary-50 text-primary-700 dark:bg-secondary-700 dark:text-primary-200'
                }`}
              >
                Gráfico
              </button>
              <button
                onClick={() => setResultsView('table')}
                className={`rounded-full px-4 py-1 text-sm font-semibold transition ${
                  resultsView === 'table'
                    ? 'bg-primary-500 text-primary-50'
                    : 'bg-primary-50 text-primary-700 dark:bg-secondary-700 dark:text-primary-200'
                }`}
              >
                Tabela
              </button>
            </div>
            <button
              onClick={downloadCSV}
              disabled={tableRows.length === 0}
              className="flex items-center gap-1 rounded-full border bg-primary-50 px-3 py-1 text-sm
               font-semibold transition hover:bg-primary-500 hover:text-primary-100 disabled:cursor-not-allowed
               disabled:opacity-40 dark:bg-secondary-700 dark:text-primary-200"
            >
              <ArrowDownTrayIcon className="h-4 w-4" aria-hidden="true" />
              Baixar CSV
            </button>
          </div>

          <div className="relative flex-1">
            {resultsView === 'chart' ? (
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
            ) : (
              <div className="h-full overflow-auto rounded-xl bg-primary-50 dark:bg-secondary-700">
                <table className="w-full text-left text-sm">
                  <thead className="sticky top-0 bg-primary-100 dark:bg-secondary-800">
                    <tr>
                      <th className="p-2">#</th>
                      <th className="p-2">Cidade</th>
                      <th className="p-2">Vidro</th>
                      <th className="p-2">WWR</th>
                      <th className="p-2">Orientação</th>
                      <th className="p-2">Brise V</th>
                      <th className="p-2">Brise H</th>
                      <th className="p-2">kWh/ano</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableRows.length === 0 ? (
                      <tr>
                        <td className="p-4 text-center text-primary-500" colSpan={8}>
                          Nenhuma simulação realizada ainda.
                        </td>
                      </tr>
                    ) : (
                      tableRows.map((row, i) => (
                        <tr
                          key={i}
                          className="border-t border-primary-200 dark:border-secondary-600"
                        >
                          <td className="p-2">{i + 1}</td>
                          <td className="p-2">{row.cidade}</td>
                          <td className="p-2">{row.vidro}</td>
                          <td className="p-2">{row.wwr}</td>
                          <td className="p-2">{row.norte}</td>
                          <td className="p-2">{row.bv}</td>
                          <td className="p-2">{row.bh}</td>
                          <td className="p-2">{(row.valor - 1754).toFixed(0)}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
