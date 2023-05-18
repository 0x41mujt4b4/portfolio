import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../public/mujtaba.png";
import { MdHome, MdInfo, MdContactPage, MdFolder } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import {Link} from "react-scroll";
import { NavHashLink } from "react-router-hash-link";

const navigation = [
  {
    name: "Home",
    to: "home",
    current: true,
    icon: <MdHome size={20} />,
  },
  {
    name: "Service",
    to: "service",
    current: false,
    icon: <FaHandHoldingHeart size={20} />,
  },
  {
    name: "Projects",
    to: "projects",
    current: false,
    icon: <MdFolder size={20} />,
  },
  {
    name: "Contact",
    to: "contact",
    current: false,
    icon: <MdContactPage size={20} />,
  },
  {
    name: "About",
    to: "about",
    current: false,
    icon: <MdInfo size={20} />,
  },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="top-0 left-0 fixed">
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
                <div className="hidden sm:block sm:ml-6 ">
                  <ul className="flex space-x-4">
                    {navigation.map((item) => (
                      // <NavLink
                      //   key={item.name}
                      //   to={item.to}
                      //   className={({ isActive }) =>
                      //     isActive
                      //       ? "underline underline-offset-8 text-red-500 px-3 py-2"
                      //       : "text-gray-300 hover:text-red-500 px-3 py-2 rounded-md"
                      //   }
                      // >
                      //   {item.name}
                      // </NavLink>
                      <li><Link className="cursor-pointer text-gray-300 hover:text-red-500 px-3 py-2 rounded-md" activeClass="underline underline-offset-8 decoration-red-500 px-3 py-2" spy={true} to={item.to} smooth={true} duration={500} offset={-70} >{item.name}</Link></li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden sm:inset-auto sm:ml-6 sm:pr-0">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 z-20 hover:text-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div> */}
              {/* <Transition
                className="backdrop-brightness-125 rounded-lg backdrop-blur-sm py-4 top-0 right-0 fixed text-center my-[50%] px-4 z-10"
                appear={true}
                show={open}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Sidebar open={open}/>
                <Disclosure.Panel as="ul" className="space-y-2">
                  {navigation.map((item) => (
                    <li>
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className={({ isActive }) =>
                          isActive
                            ? "flex items-center rounded-lg p-2 text-base font-normal text-white bg-red-500"
                            : "flex items-center rounded-lg p-2 text-base font-normal text-gray-900 bg-[#00073d] hover:bg-gray-100 dark:text-white dark:hover:bg-red-500"
                        }
                      >
                        <Disclosure.Button
                        className="flex items-center rounded-lg p-2 text-base font-normal"
                        >
                          {item.icon}
                          <span className="ml-3">{item.name}</span>
                        </Disclosure.Button>
                      </NavLink>
                    </li>
                  ))}
                </Disclosure.Panel>
              </Transition> */}
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
