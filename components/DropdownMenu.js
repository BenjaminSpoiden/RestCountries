import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from '@heroicons/react/solid'


const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export const DropdownMenu = ({ filterByRegion }) => {

    return (
        <Menu  as="div" className="relative inline-block z-50 text-left">
            {({ open }) => (
                <>
                <div>
                    <Menu.Button className="inline-flex justify-center w-full rounded-md dark:border-none borderborder-gray-300 shadow-sm px-4 py-4 dark:bg-gray-700 bg-white text-sm font-medium dark:text-gray-300 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                        Filter by Region
                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                </div>

                <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items 
                    onClick={(e) => filterByRegion(e.target.outerText.toLowerCase())} 
                    static
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg dark:bg-gray-700 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                    <div className="py-1">
                        <Menu.Item >
                        {({ active }) => (
                            <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-300',
                                'block px-4 py-2 text-sm'
                            )}
                            >
                                All
                            </a>
                        )}
                        </Menu.Item>
                        <Menu.Item >
                        {({ active }) => (
                            <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-300',
                                'block px-4 py-2 text-sm'
                            )}
                            >
                                Africa
                            </a>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-300',
                                'block px-4 py-2 text-sm'
                            )}
                            >
                                Americas
                            </a>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-300',
                                'block px-4 py-2 text-sm'
                            )}
                            >
                                Asia
                            </a>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-300',
                                'block px-4 py-2 text-sm'
                            )}
                            >
                                Europe
                            </a>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                            <a
                            href="#"
                            className={classNames(
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-300',
                                'block px-4 py-2 text-sm'
                            )}
                            >
                                Oceania
                            </a>
                        )}
                        </Menu.Item>
                    </div>
                    </Menu.Items>
                </Transition>
            </>
            )}
        </Menu>
    )
}