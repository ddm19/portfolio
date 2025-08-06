import { useState, useEffect } from 'react'
import './App.scss'
import Navbar from 'components/navbar/navbar'
import ParticlesBackground from 'components/particleBackground/particlesBackground';
import HeroSection from 'components/heroSection/heroSection';
import Toast from 'components/toast/toast';


function App() {
  const [isScrollToTopVisible, setScrollToTopVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setScrollToTopVisible(true)
      } else {
        setScrollToTopVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }


  return (
    <>
      <ParticlesBackground />

      <div className="app">
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
        </main>

        <button
          className={`scrollToTop ${isScrollToTopVisible ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </>
  )
}

export default App
