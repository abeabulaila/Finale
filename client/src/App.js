import './App.css';
import Welcome from './Components/Welcome';
import Artists from './Components/Artists';
import MyAccount from './Components/MyAccount';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";
import SignupForm from './Components/SignupForm';
import LoginForm from './Components/LoginForm';
import BioPage from './Components/BioPage';

function App() {
  const [bandList, setBandList] = useState([{}])
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
        });
      }
    });
  }, []);
  
  useEffect(() => {
    fetch('/bands')
    .then(r => r.json())
    .then(data => setBandList(data))
    
  }, [])

  return (
    <Router>
      <NavBar currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/artists" element={<Artists bandList={bandList} currentUser={currentUser} />} />
        <Route path="/myaccount" element={<MyAccount setCurrentUser={setCurrentUser} />} />
        <Route path="/signup" element={<SignupForm onLogin={setCurrentUser} />} />
        <Route path="/login" element={<LoginForm currentUser={currentUser} onLogin={setCurrentUser}  />} />
        <Route path="/bands/:id" element={<BioPage bandList={bandList} currentUser={currentUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
