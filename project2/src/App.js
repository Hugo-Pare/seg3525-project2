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

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/seg3525-project2/home'  element={<Home/>} />
        <Route path='/seg3525-project2/about' element={<About/>} />
        <Route path='/seg3525-project2/analyser' element={<Analyser/>} />
        <Route path='/seg3525-project2/comparer' element={<Comparer/>} />
        <Route path='/seg3525-project2/rechercher' element={<Rechercher/>} />
      </Routes>
    </Router>
  );
}

export default App;
