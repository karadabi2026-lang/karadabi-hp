import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Top } from './pages/Top';
import { Layer00, Layer01, Layer02, Layer03, Layer04, Layer05 } from './pages/Pages';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/layer00" element={<Layer00 />} />
          <Route path="/layer01" element={<Layer01 />} />
          <Route path="/layer02" element={<Layer02 />} />
          <Route path="/layer03" element={<Layer03 />} />
          <Route path="/layer04" element={<Layer04 />} />
          <Route path="/layer05" element={<Layer05 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
