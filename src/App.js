import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing the route components
import About from './routes/About';
import Place from './routes/Place';
import Blog from './routes/Blog';
import Home from './routes/Home';
import Map from './routes/Map';
import Nav from './components/Nav';

const App = () => {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place" element={<Place />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </Router>
  );
};

export default App;
