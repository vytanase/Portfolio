import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Ensure this import is correct
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Ensure the correct path to the Home component
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ExampleComponent from './components/ExampleComponent';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ExampleComponent />  {/* Use the ExampleComponent */}
      </div>
    </Router>
  );
}

export default App;
