import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Media from './pages/Media';
import Gallery from './pages/Gallery';
import Careers from './pages/Careers';
import Downloads from './pages/Downloads';
import Transparency from './pages/Transparency';
import Contact from './pages/Contact';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/media" element={<Media />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/transparency" element={<Transparency />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
