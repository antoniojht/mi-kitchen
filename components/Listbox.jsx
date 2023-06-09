/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */

'use client';

import { useState, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

const listBoxOptions = [{ name: 'Seleccione una opción...' }];

export default function MyListbox({ list, getSelected }) {
  const [selected, setSelected] = useState(listBoxOptions[0]);

  const handleChange = (e) => {
    getSelected(e.name);
  };

  return (
    <div className="w-72">
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e), handleChange(e);
        }}
      >
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
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
            <Listbox.Options className="absolute z-[1] pl-3 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {list.map((element, elementIdx) => (
                <Listbox.Option
                  key={elementIdx}
                  className={({ active }) => `relative list-none cursor-default select-none py-2 pr-4 ${active ? 'bg-amber-100 text-gray-900' : 'text-gray-900'
                    // eslint-disable-next-line indent
                    }`}
                  value={element}
                >
                  {({ selectedListElement }) => (
                    <span
                      className={`block capitalize truncate ${selectedListElement ? 'font-medium' : 'font-normal'
                        // eslint-disable-next-line indent
                        }`}
                    >
                      {element.name}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
