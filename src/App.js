import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Service from "./pages/Service";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar"

let pages = [
  { name: Home, path: "" },
  { name: About, path: "/about" },
  { name: Contact, path: "/contact" },
  { name: Projects, path: "/projects" },
  { name: Service, path: "/service" },
];
function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
      {pages.map((page) => <Route path={page.path} element={<page.name />}/>)}
      </Routes>
    </>
  );
}

export default App;
