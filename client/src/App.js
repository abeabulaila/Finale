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
// import GiantClaw from './Components/GiantClaw';
// import Kudzu from './Components/Kudzu';
// import Mastodon from './Components/Mastodon';
// import RendezVous from './Components/RendezVous';
// import Retail from './Components/Retail';
// import Shh from './Components/Shh';
// import SweetTrip from './Components/SweetTrip';
// import Warthog from './Components/Warthog';
// import Wu from './Components/Wu';


function App() {
  const [bandList, setBandList] = useState([{}])

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
        <Route path="/giant%20claw" element={<Merch />} />
        <Route path="/kudzu" element={<Merch />} />
        <Route path="/mastodon" element={<Merch />} />
        <Route path="/rendez%20vous" element={<Merch />} />
        <Route path="/retail" element={<Merch />} />
        <Route path="/SHXCXCHCXSH" element={<Merch />} />
        <Route path="/sweet%20trip" element={<Merch />} />
        <Route path="/warthog" element={<Merch />} />
        <Route path="/wu-tang%20clan" element={<Merch />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/myaccount" element={<MyAccount />} />

      </Routes>
    </Router>
  );
}

export default App;
