import Navbar from './components/Navbar';
import Home from './components/Home'
import Sidebar from './components/Sidebar';
// import logo from './Assets/final_logo.png';

function App() {
  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      <Home />
    </>
    // <nav className="relative container mx-auto p-6">
    //   {/* Flex Container */}
    //   <div className="flex items-center justify-between">
    //     {/* Logo */}
    //     <div className="pt-2 ">
    //       <img src={logo} alt="React Logo" className='max-h-10'/>
    //     </div>
    //     {/* Menu items */}
    //     <div className="hidden md:flex space-x-6">
    //       <a href="#" className="hover:text-red-500">Home</a>
    //       <a href="#" className="hover:text-red-500">About</a>
    //       <a href="#" className="hover:text-red-500">Service</a>
    //       <a href="#" className="hover:text-red-500">Portfolio</a>
    //       <a href="#" className="hover:text-red-500">Blog</a>
    //       <a href="#" className="hover:text-red-500">Contact</a>
    //     </div>
    //     {/* Button */}
    //     <a href="#" className="hidden md:block p-3 px-6 pt-2 text-white bg-red-500 rounded-full baseline hover:bg-red-400" > Hire Me </a>
    //   {/* Hamburger Menu */}

    //   </div>
    // </nav>
  );
}

export default App;
