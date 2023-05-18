import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Service from "./pages/Service";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar"
// import {HashLink} from "react-router-hash-link";

let pages = [
  { name: Home, path: "" },
  { name: Service, path: "service" },
  { name: Projects, path: "projects" },
  { name: Contact, path: "contact" },
  { name: About, path: "about" },
];
function App() {
  return (
    <div className="container p-8 md:p-24 space-y-6">
      <Navbar />
      <Sidebar />
      {pages.map((page) => <page.name />)}
      {/* <Routes>
      {pages.map((page) => <Route path={page.path} element={<page.name />}/>)}
      </Routes> */}
    </div>
  );
}

export default App;
