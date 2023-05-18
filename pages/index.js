import Home from './home'
import Service from './service'
import Projects from './projects'
import Contact from './contact'
import About from './about'

export default function App() {
  return (
    <div className='container'>
    <Home />
    <Service />
    <Projects />
    <Contact />
    <About />
    </div>
  );
}
