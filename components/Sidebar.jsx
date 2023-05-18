import React from "react";
import {BsArrowLeftShort} from "react-icons/bs";
import { useState } from "react";
// import { Disclosure, Transition } from "@headlessui/react";
import { MdHome, MdInfo, MdContactPage, MdFolder } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {Link} from "react-scroll"

function Sidebar() {
  const [open, setOpen] = useState(false);
  const navigation = [
    {
      name: "Home",
      to: "home",
      current: true,
      icon: MdHome,
    },
    {
      name: "Service",
      to: "service",
      current: false,
      icon: FaHandHoldingHeart,
    },
    {
      name: "Projects",
      to: "projects",
      current: false,
      icon: MdFolder,
    },
    {
      name: "Contact",
      to: "contact",
      current: false,
      icon: MdContactPage,
    },
    {
      name: "About",
      to: "about",
      current: false,
      icon: MdInfo,
    },
  ];

  return (
    <div className="sm:hidden flex items-center top-0 right-0 h-full justify-center fixed">
      <div className={`backdrop-brightness-125 text-white backdrop-blur-sm rounded-lg py-2 ${open ? "w-36" : "w-12"} duration-300 `}>
        <BsArrowLeftShort className={`bg-blue-900 text-3xl rounded-full absolute -left-4 top-9 cursor-pointer ${open && "rotate-180"}`} onClick={() => setOpen(!open)} />
        <div className={`flex justify-center`}>
          <ul className="space-y-2">
                    {navigation.map((item) => (
                      <li>
                        <Link
                          key={item.name}
                          activeClass="underline underline-offset-8 decoration-red-500 text-red-500"
                          to={item.to}
                          smooth={true}
                          spy={true}
                          duration={500}
                          offset={-70}
                          // className={({ isActive }) =>
                          //   isActive
                          //     ? "underline underline-offset-8 decoration-red-500 text-red-500"
                          //     : ""
                          // }
                        >
                          <button
                          className={`flex items-center p-2 text-base font-normal`}
                          >
                            
                            <span className={`${!open && "space-y-2"}`}>{<item.icon size={open ? 20 : 24}/>}</span>
                            <span className={`ml-3 duration-300 ${!open && "scale-0 absolute"}`}>{item.name}</span>
                          </button>
                        </Link>
                      </li>
                    ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
