import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [selectedResume, setSelectedResume] = useState('2page')
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const resumeMap: { [key: string]: { name: string; md: string; pdf: string } } = {
    '1page': {
      name: '1-Page Resume (ATS Friendly)',
      md: '/resume/1_Page_Resume___ATS_Friendly__Markdown__2026_02_23T21_50_48.md',
      pdf: '/resume/1_Page_Resume___ATS_Friendly__Markdown__2026_02_23T21_50_48.pdf'
    },
    '2page': {
      name: '2-Page Resume (ATS Friendly)',
      md: '/resume/2_Page_Resume___ATS_Friendly_Markdown_2026_02_23T21_54_24.md',
      pdf: '/resume/2_Page_Resume___ATS_Friendly_Markdown_2026_02_23T21_54_24.pdf'
    },
    'cv': {
      name: 'Full CV (Design Technologist)',
      md: '/resume/Full_CV___Design_Technologist__ATS_Friendly_Markdown__2026_02_23T21_53_50.md',
      pdf: '/resume/Full_CV___Design_Technologist__ATS_Friendly_Markdown__2026_02_23T21_53_50.pdf'
    }
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div>
            <h1>About Me</h1>
            <p>Innovative Design Technologist with 8+ years at Amazon Web Services specializing in user experience 
              design, front-end development, and developing AI-powered automation. Proven track record of launching
               global-scale control systems, creating comprehensive design systems, and bridging design and 
               engineering disciplines. Expert in translating complex technical requirements into intuitive, 
               user-friendly interfaces that delight customers and drive operational excellence.</p>
            <p className='subHeader'>Contact me at:</p>
              <span className='contact-info'>
                LinkedIn: <a href="https://linkedin.com/in/davidtrick" target="_blank" 
                  rel="noopener noreferrer">linkedin.com/in/davidtrick</a></span>
              <span className='contact-info'>
                Email: <a href="mailto:trickyeng@gmail.com">trickyeng@gmail.com</a></span>
              <span className='contact-info'>
                Phone: <a href="tel:520.904.4503">520.904.4503</a></span>
          </div>
        )
      case 'projects':
        return (
          <div>
            <h1>Projects</h1>
            <p>My notable projects include:</p>
            <ul>
              <li>Data Center Controls Systems at AWS</li>
              <li>Design Systems using CloudScape</li>
              <li>AI-powered automation tools</li>
            </ul>
          </div>
        )
      case 'examples':
        return (
          <div>
            <h1>Design Examples</h1>
            <p>React website examples and Figma design prototypes:</p>
            <p>Add your design examples and React websites here. They will appear in this section once uploaded to the public/examples folder.</p>
          </div>
        )
      case 'resumes':
        const currentResume = resumeMap[selectedResume]
        return (
          <div>
            <h1>Contact & Resume</h1>
            <div>
              <h2>Get in Touch</h2>
              <p>Email: <a href="mailto:trickyeng@gmail.com">trickyeng@gmail.com</a></p>
              <p>Phone: 520.904.4503</p>
              <p>LinkedIn: <a href="https://linkedin.com/in/davidtrick" target="_blank" rel="noopener noreferrer">linkedin.com/in/davidtrick</a></p>
            </div>
            <div>
              <h2>Download Resume</h2>
              <div>
                <label htmlFor="resume-dropdown">Select Resume Format:</label>
                <select 
                  id="resume-dropdown" 
                  value={selectedResume} 
                  onChange={(e) => setSelectedResume(e.target.value)}
                >
                  <option value="2page">2-Page Resume (ATS Friendly)</option>
                  <option value="1page">1-Page Resume (ATS Friendly)</option>
                  <option value="cv">Full CV (Design Technologist)</option>
                </select>
              </div>
              <div>
                <p><strong>{currentResume.name}</strong></p>
                <a href={currentResume.md} download className="btn-download">Download Markdown</a>
                <a href={currentResume.pdf} download className="btn-download">Download PDF</a>
              </div>
            </div>
          </div>
        )
      default:
        return <div>Select a section</div>
    }
  }

  return (
    <div className="app">
      <header className="navbar">
        <div className="navbar-left">
          <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <h1 className="navbar-title">David Trick</h1>
        </div>
        <div className="navbar-right">
          <div className="navbar-contact">
            <a href="mailto:trickyeng@gmail.com">trickyeng@gmail.com</a>
            <span className="divider">•</span>
            <a href="tel:5209044503">520.904.4503</a>
          </div>
          <div className="resume-dropdown-container">
            <select 
              value={selectedResume} 
              onChange={(e) => setSelectedResume(e.target.value)}
              className="resume-dropdown-nav"
            >
              <option value="2page">2-Page Resume</option>
              <option value="1page">1-Page Resume</option>
              <option value="cv">Full CV</option>
            </select>
            <a href={resumeMap[selectedResume].pdf} download className="download-btn">Download PDF</a>
          </div>
        </div>
      </header>
      <div className="main-container">
        <nav className={`sidebar ${menuOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <h2>My Portfolio</h2>
            <button className="close-menu" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
          </div>
        <ul>
          <li>
            <button onClick={() => { setActiveSection('about'); if (isMobile) setMenuOpen(false); }} className={activeSection === 'about' ? 'active' : ''}>
              About
            </button>
          </li>
          <li>
            <button onClick={() => { setActiveSection('projects'); if (isMobile) setMenuOpen(false); }} className={activeSection === 'projects' ? 'active' : ''}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => { setActiveSection('examples'); if (isMobile) setMenuOpen(false); }} className={activeSection === 'examples' ? 'active' : ''}>
              Examples
            </button>
          </li>
        </ul>
      </nav>
      {isMobile && menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)}></div>}
      <main className="content">
        {renderContent()}
      </main>
      </div>
    </div>
  )
}

export default App
