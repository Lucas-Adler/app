import classNames from 'classnames';

export const Cidade = [ 
{
<div id="Cities" className="relative my-0 pb-1">
<Listbox value={selectedC} onChange={setSelectedC} >
  
  <div className="relative py-1">

    <Listbox.Button className="hover: flex w-[200px] items-center justify-between rounded border-2 bg-primary-50 p-2 transition hover:shadow-md hover:duration-100 hover:ease-in"
    >
      <span>{selectedC.name}</span>
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
      <Listbox.Options className="absolute z-20 w-[200px] border-2 bg-primary-50">
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
</div>}
]