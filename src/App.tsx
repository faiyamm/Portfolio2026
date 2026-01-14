import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SEO } from './components/layout/SEO';
import { Home } from './pages/Home';
import { ProjectDetails } from './pages/ProjectDetails';

function App() {
  return (
    <Router>
      <SEO />
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


    </Router>
  )
}

export default App
