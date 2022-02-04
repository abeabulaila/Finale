import './App.css';
import Welcome from './Components/Welcome';
import Artists from './Components/Artists';
import Favorites from './Components/Favorites';
import Merch from './Components/Merch';
import MyAccount from './Components/MyAccount';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { useState, useEffect } from 'react';

function App() {



  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/myaccount" element={<MyAccount />} />

      </Routes>
    </Router>
  );
}

export default App;
