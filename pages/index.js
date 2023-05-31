import Home from './home'
import Experience from './experience'
import Projects from './projects'
import Contact from './contact'
import About from './about'
import Layout from '@/components/Layout'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default function App() {
  return (
    <>
    <Sidebar />
    <Navbar />
    <main className='flex flex-col'>
      <Home />
      <Experience />
      <Projects />
      <Contact />
      <About />
    </main>
    </>
  );
}
