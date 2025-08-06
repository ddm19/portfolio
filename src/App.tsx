import { useState, useEffect } from 'react'
import './App.scss'
import Navbar from 'components/navbar/navbar'
import ParticlesBackground from 'components/particleBackground/particlesBackground';
import HeroSection from 'components/heroSection/heroSection';


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

        <main className="mainContent">
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
