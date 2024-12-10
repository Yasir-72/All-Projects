import React from 'react';
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Menu from './components/Menu.jsx';
import Contact from './components/Contact.jsx';

const App = () => {
  return (
    <>
   <BrowserRouter>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={ <Menu /> }/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </>
   
  );
};

export default App;
