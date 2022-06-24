/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Comparer from './pages/comparer';
import Analyser from './pages/analyser';
import Rechercher from './pages/rechercher';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/'  element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/analyser' element={<Analyser/>} />
        <Route path='/comparer' element={<Comparer/>} />
        <Route path='/rechercher' element={<Rechercher/>} />
      </Routes>
    </Router>
  );
}

export default App;
