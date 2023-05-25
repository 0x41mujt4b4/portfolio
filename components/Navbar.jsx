import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../public/logo.png";
import { MdHome, MdInfo, MdContactPage, MdFolder } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import {Link} from "react-scroll";
import { NavHashLink } from "react-router-hash-link";
import Image from 'next/image'

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
    <nav className='fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-slate-700'>
              <div className='w-full m-auto flex justify-center sm:justify-between items-center p-4 text-white'>
                <div className="flex flex-shrink-0 items-center space-x-1">
                  <Image
                    className="h-10 w-auto m-0"
                    src={logo}
                    alt="logo"
                  />
                  <span className="font-bold cursor-default tracking-wider">MUJTABA</span>
                </div>
                <div className="hidden sm:flex sm:ml-6">
                  <ul className="flex items-center space-x-4">
                    {navigation.map((item) => (
                      <li><Link className="cursor-pointer text-gray-300 hover:text-red-500 px-3 py-2 rounded-md" activeClass="underline underline-offset-8 decoration-red-500 px-3 py-2" spy={true} to={item.to} smooth={true} duration={300} offset={-100} >{item.name}</Link></li>
                    ))}
                  </ul>
                </div>
              </div>
    </nav>
  );
}
