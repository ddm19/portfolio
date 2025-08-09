import { useState, useEffect } from 'react'
import './App.scss'
import Navbar from 'components/navbar/navbar'
import ParticlesBackground from 'components/particleBackground/particlesBackground';
import HeroSection from 'components/heroSection/heroSection';
import Toast from 'components/toast/toast';
import About from 'components/about/about';
import ScrollToTop from 'components/scrollToTop/scrollToTop';


function App() {

  return (
    <>

      <div className="app">
        <ParticlesBackground />
        <Navbar />
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
          <About />
        </main>

        <ScrollToTop />
      </div>
    </>
  )
}

export default App
