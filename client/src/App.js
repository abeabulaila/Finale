import './App.css';
import Welcome from './Components/Welcome';
import Artists from './Components/Artists';
import Merch from './Components/Merch';
import MyAccount from './Components/MyAccount';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";
import Gas from './Components/Gas';
import GiantClaw from './Components/GiantClaw';
import Kudzu from './Components/Kudzu';
import Mastodon from './Components/Mastodon';
import RendezVous from './Components/RendezVous';
import Retail from './Components/Retail';
import Shh from './Components/Shh';
import SweetTrip from './Components/SweetTrip';
import Warthog from './Components/Warthog';
import Wu from './Components/Wu';
import Review from './Components/Review';
import SignupForm from './Components/SignupForm';
import LoginForm from './Components/LoginForm';
function App() {
  const [bandList, setBandList] = useState([{}])

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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
    fetch('/api/bands')
    .then(r => r.json())
    .then(data => setBandList(data))
    
  }, [])
 

  // if(currentUser) {
  //  alert(`Welcome, ${currentUser.username}!`)
  // } else {
  //   <LoginForm onLogin={setCurrentUser} />
  // }
  // console.log(currentUser)
  
  // if (!isAuthenticated) {
  //   return <div>
  // signup here........... put this for reviews maybe ?
  // </div>;
  // }
  





  return (
    <Router>
      <NavBar currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/artists" element={<Artists bandList={bandList} />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/gas" element={<Gas currentUser={currentUser} />} />
        <Route path="/giant%20claw" element={<GiantClaw />} />
        <Route path="/kudzu" element={<Kudzu />} />
        <Route path="/mastodon" element={<Mastodon />} />
        <Route path="/rendez%20vous" element={<RendezVous />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/SHXCXCHCXSH" element={<Shh />} />
        <Route path="/sweet%20trip" element={<SweetTrip />} />
        <Route path="/warthog" element={<Warthog />} />
        <Route path="/wu-tang%20clan" element={<Wu />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/myaccount" element={<MyAccount setCurrentUser={setCurrentUser} />} />
        <Route path="/review" element={<Review currentUser={currentUser} />} />
        <Route path="/signup" element={<SignupForm onLogin={setCurrentUser} />} />
        <Route path="/login" element={<LoginForm currentUser={currentUser} onLogin={setCurrentUser}  />} />
      </Routes>
    </Router>
  );
}

export default App;
