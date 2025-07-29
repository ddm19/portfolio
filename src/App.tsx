import { useState, useEffect } from 'react'
import './App.scss'

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="container nav-container">
          <div className="logo">
            <h2>Portfolio</h2>
          </div>
          <ul className="nav-menu">
            <li><a className="nav-link" onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a className="nav-link" onClick={() => scrollToSection('about')}>About</a></li>
            <li><a className="nav-link" onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="section hero">
          <div className="container">
            <h1>Welcome to My Portfolio</h1>
            <p>I'm a passionate developer creating amazing digital experiences</p>
            <button className="btn" onClick={() => scrollToSection('about')}>
              Learn More
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <h2 className="text-center mb-3">About Me</h2>
            <div className="grid">
              <div className="card">
                <h3>Background</h3>
                <p>I'm a full-stack developer with a passion for creating innovative solutions and beautiful user experiences.</p>
              </div>
              <div className="card">
                <h3>Skills</h3>
                <p>React, TypeScript, Node.js, Python, CSS, and modern web technologies.</p>
              </div>
              <div className="card">
                <h3>Experience</h3>
                <p>3+ years of experience in web development and software engineering.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section">
          <div className="container">
            <h2 className="text-center mb-3">My Projects</h2>
            <div className="grid">
              <div className="card">
                <h3>Project One</h3>
                <p>A modern web application built with React and TypeScript featuring responsive design and smooth animations.</p>
                <button className="btn">View Project</button>
              </div>
              <div className="card">
                <h3>Project Two</h3>
                <p>Full-stack application with Node.js backend and React frontend, including user authentication and data visualization.</p>
                <button className="btn">View Project</button>
              </div>
              <div className="card">
                <h3>Project Three</h3>
                <p>Mobile-first responsive website with advanced CSS animations and optimized performance.</p>
                <button className="btn">View Project</button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="container">
            <h2 className="text-center mb-3">Get In Touch</h2>
            <div className="flex-center">
              <div className="card" style={{ maxWidth: '600px', width: '100%' }}>
                <h3 className="text-center">Contact Me</h3>
                <p className="text-center">Feel free to reach out for collaborations or just a friendly hello!</p>
                <div className="flex-center mt-2">
                  <button className="btn">Send Message</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${isScrollToTopVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  )
}

export default App
