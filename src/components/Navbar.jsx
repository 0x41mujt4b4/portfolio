import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../Assets/mujtaba.png";
import Sidebar from "./Sidebar";
import {MdHome, MdInfo, MdContactPage, MdFolder} from 'react-icons/md'
import {FaHandHoldingHeart, FaFolder} from 'react-icons/fa'

const navigation = [
  {
    name: "Home",
    href: "#",
    current: false,
    icon: (
      <MdHome size={20}/>
    ),
  },
  {
    name: "About",
    href: "#",
    current: false,
    icon: (
      <MdInfo size={20}/>
    ),
  },
  {
    name: "Service",
    href: "#",
    current: false,
    icon: (
      <FaHandHoldingHeart size={20}/>
    ),
  },
  {
    name: "Portfolio",
    href: "#",
    current: false,
    icon: (
      <MdFolder size={20} />
    ),
  },
  {
    name: "Contact",
    href: "#",
    current: false,
    icon: (
      <MdContactPage size={20}/>
    ),
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-10 w-auto"
                    src={logo}
                    alt="logo"
                  />
                  <img
                    className="hidden lg:block h-10 w-auto"
                    src={logo}
                    alt="logo"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:border-solid hover:border-b-2  hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden sm:inset-auto sm:ml-6 sm:pr-0">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 z-20 hover:text-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <Transition
                className="sm:hidden top-0 right-0 fixed text-center my-[50%] px-4 rounded-sm z-10"
                appear={true}
                show={open}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Disclosure.Panel as="ul" className="space-y-2">
                  {navigation.map((item) => (
                    <li>
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "flex items-center rounded-lg p-2 text-base font-normal text-gray-900 bg-[#00073d] hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.icon}
                        <span className="ml-3">{item.name}</span>
                      </Disclosure.Button>
                    </li>
                  ))}
                </Disclosure.Panel>
              </Transition>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
