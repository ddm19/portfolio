import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLaptopCode, faUser, faWrench } from '@fortawesome/free-solid-svg-icons';
import './App.scss'
import Navbar from 'components/navbar/navbar'
import ParticlesBackground from 'components/particleBackground/particlesBackground';
import HeroSection from 'components/heroSection/heroSection';
import Toast from 'components/toast/toast';
import About from 'components/about/about';
import ScrollToTop from 'components/scrollToTop/scrollToTop';
import Projects from 'components/projects/projects';
import Contact from 'components/contact/contact';
import Services from 'components/services/services';


function App() {

  const CONTACT_NAV_ITEMS = [
    { href: 'https://www.linkedin.com/in/dani-domenech-moreno-05aa011a8', icon: faLinkedin, label: 'LinkedIn' },
    { href: 'mailto:domenechmorenodaniel@gmail.com', icon: faEnvelope, label: 'Email' },
    { href: 'https://wa.me/34653582886', icon: faWhatsapp, label: 'WhatsApp' },
    { href: 'https://github.com/ddm19', icon: faGithub, label: 'GitHub' },
  ];

  const isMobile = window.innerWidth <= 768;

  const FLOATING_NAV_ITEMS = [
    {
      href: '#projects',
      icon: faLaptopCode,
      label: 'Portfolio'
    },
    {
      href: '#services',
      icon: faWrench,
      label: 'Servicios',
    },
    {
      href: '#about',
      icon: faUser,
      label: 'Sobre mí',
    },
    {
      href: '#contact',
      icon: faEnvelope,
      label: 'Contacto'
    },
  ];

  return (
    <>

      <div className="app">
        <ParticlesBackground />

        <div className="logo">
          <a href='https://www.thedm.es'><img draggable="false" src="/logo.svg" alt="logo" className="logo__img" /> </a>
          <h2 className="logo__text">
            <span>The<span className="logo__text--highlight">DM</span></span>
            <span> {!isMobile && '|'} Soluciones Digitales </span>
          </h2>
          <p className="logo__text--small">Dani Domenech</p>
        </div>
        <Navbar items={CONTACT_NAV_ITEMS} />
        <Toast />

        <main className="mainContent animate__animated animate__fadeIn animate__delay-1s" onAnimationEnd={e => {
          if (e.animationName === 'fadeIn') {
            e.currentTarget.classList.remove(
              'animate__animated',
              'animate__fadeIn',
              'animate__delay-1s'
            );
          }
        }}>

          <HeroSection />
          <Projects />
          <Services />
          <About />
          <Contact />
        </main>

        <Navbar items={FLOATING_NAV_ITEMS} isFloating={true} />

        <ScrollToTop />
      </div>
    </>
  )
}

export default App
