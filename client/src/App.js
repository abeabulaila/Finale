import './App.css';
import Welcome from './Components/Welcome';
import Artists from './Components/Artists';
import Favorites from './Components/Favorites';
import Merch from './Components/Merch';
import MyAccount from './Components/MyAccount';
import NavBar from './Components/NavBar';
import BandPage from './Components/BandPage';
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

  console.log(currentUser)


    useEffect(() => {
        fetch('/bands')
            .then(r => r.json())
            .then(data => setBandList(data))

    }, [])








  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/artists" element={<Artists bandList={bandList} />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/gas" element={<Gas />} />
        <Route path="/giant%20claw" element={<GiantClaw />} />
        <Route path="/kudzu" element={<Kudzu />} />
        <Route path="/mastodon" element={<Mastodon />} />
        <Route path="/rendez%20vous" element={<RendezVous />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/SHXCXCHCXSH" element={<Shh />} />
        <Route path="/sweet%20trip" element={<SweetTrip />} />
        <Route path="/warthog" element={<Warthog />} />
        <Route path="/wu-tang%20clan" element={<Wu />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/review" element={<Review />} />
        <Route path="/signup" element={<SignupForm />} />


      </Routes>
    </Router>
  );
}

export default App;
