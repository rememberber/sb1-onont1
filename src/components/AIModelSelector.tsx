import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { Check, ChevronDown, Cloud, Cpu } from 'lucide-react';
import { useAIStore } from '../store/useAIStore';
import { cn } from '../utils/cn';

export function AIModelSelector() {
  const { models, selectedModel, setSelectedModel } = useAIStore();
  const selectedModelData = models.find(model => model.id === selectedModel);

  return (
    <div className="w-full">
      <Listbox value={selectedModel} onChange={setSelectedModel}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left border border-gray-200 focus:outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-opacity-75">
            <span className="flex items-center">
              {selectedModelData?.type === 'cloud' ? (
                <Cloud className="w-5 h-5 text-gray-400 mr-2" />
              ) : (
                <Cpu className="w-5 h-5 text-gray-400 mr-2" />
              )}
              <span className="block truncate">{selectedModelData?.name}</span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
              {models.map((model) => (
                <Listbox.Option
                  key={model.id}
                  className={({ active }) =>
                    cn(
                      'relative cursor-pointer select-none py-2 pl-10 pr-4',
                      active ? 'bg-blue-50 text-blue-900' : 'text-gray-900'
                    )
                  }
                  value={model.id}
                >
                  {({ selected }) => (
                    <>
                      <span className={cn('block truncate', selected ? 'font-medium' : 'font-normal')}>
                        <span className="flex items-center">
                          {model.type === 'cloud' ? (
                            <Cloud className="w-5 h-5 text-gray-400 mr-2" />
                          ) : (
                            <Cpu className="w-5 h-5 text-gray-400 mr-2" />
                          )}
                          {model.name}
                        </span>
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                          <Check className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                      <span className="block truncate text-sm text-gray-500 ml-7">
                        {model.description}
                      </span>
                    </>
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