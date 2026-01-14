import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { ProjectDetails } from './pages/ProjectDetails';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen mesh-gradient-bg">
        <Navbar />
        <main className="layout-container flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>

      <svg className="hidden">
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.5"
            stitchTiles="stitch"
          />
          <feColorMatrix type='saturate' values='0' />
        </filter>
      </svg>
    </Router>
  )
}

export default App
