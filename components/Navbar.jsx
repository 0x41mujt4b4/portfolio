import { MdHome, MdInfo, MdContactPage, MdFolder } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";
import {Link} from "react-scroll";
import Image from 'next/image'
import logo from "../public/logo.png";

const NAV_ITEMS = [
  { name: "Home", to: "home", icon: <MdHome size={20} /> },
  { name: "Experience", to: "experience", icon: <FaHandHoldingHeart size={20} /> },
  { name: "Projects", to: "projects", icon: <MdFolder size={20} /> },
  { name: "Contact", to: "contact", icon: <MdContactPage size={20} /> },
  { name: "About", to: "about", icon: <MdInfo size={20} /> },
];

const Navbar = () => (
  <nav className='fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-blue-600 bg-opacity-50 backdrop-blur-md rounded drop-shadow-lg'>
    <div className='w-full m-auto flex justify-center sm:justify-between items-center p-4 text-white'>
      <Logo />
      <Navigation />
    </div>
  </nav>
);

const Logo = () => (
  <div className="flex flex-shrink-0 items-center space-x-1">
    <Image className="h-10 w-auto m-0" src={logo} alt="logo" />
    <span className="font-bold cursor-default tracking-wider">MUJTABA</span>
  </div>
);

const Navigation = () => (
  <div className="hidden sm:flex sm:ml-6">
    <ul className="flex items-center space-x-4">
      {NAV_ITEMS.map((item) => (
        <li key={item.name}>
          <Link
            className="cursor-pointer text-gray-300 hover:text-blue-950 px-3 py-2 rounded-md"
            activeClass="underline underline-offset-8 decoration-blue-950 text-blue-950 px-3 py-2"
            spy={true}
            to={item.to}
            smooth={true}
            duration={300}
            offset={-100}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Navbar;