import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Works from './components/Works/Works';
import Skills from './components/Skills/Skills';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import FooterBottom from './components/Footer/FooterBottom';
import ParticlesBg from './components/Particles/ParticlesBg';



function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-black'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<About />} />
            <Route path='/works' element={<Works />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/contact' element={<Contacts />} />
          </Routes>
          <ParticlesBg />
        </div>

      

        <Footer />
        <FooterBottom />
      </div>
    </BrowserRouter>
  );
}

export default App;
