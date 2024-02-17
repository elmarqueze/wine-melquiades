import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
// import Contact from '../pages/Contact';

import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Special from '../pages/Special';

const AnimRoutes = () => {
  const location = useLocation();
  
  return(
    <AnimatePresence initial={true} mode='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/special' element={<Special />} />
      </Routes>
    </AnimatePresence>
  )
};

export default AnimRoutes;
