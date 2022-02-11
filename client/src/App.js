import './App.css';
import Welcome from './Components/Welcome';
import Artists from './Components/Artists';
import Merch from './Components/Merch';
import MyAccount from './Components/MyAccount';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";
import Review from './Components/Review';
import SignupForm from './Components/SignupForm';
import LoginForm from './Components/LoginForm';
import BioPage from './Components/BioPage';
import BandCard from "./Components/BandCard";

function App() {
  const [bandList, setBandList] = useState([{}])
  // const [band, setBand] = useState({reviews: []})


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
    fetch('/bands')
    .then(r => r.json())
    .then(data => setBandList(data))
    
  }, [])

  // function allBands(){
  // bandList.map(band => {
  //     return (
  //       <BandCard
  //       key={band.id}
  //       bandName={band.band_name}
  //       img={band.img}
  //       album={band.album}
  //       genre={band.genre}
  //       id={band.id}
  //       band={band}
  //       />
        
  //       )
  //     })
  //   }
  // console.log(bandList)
 

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
        <Route path="/artists" element={<Artists bandList={bandList} currentUser={currentUser} />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/myaccount" element={<MyAccount setCurrentUser={setCurrentUser} />} />
        <Route path="/review" element={<Review currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path="/signup" element={<SignupForm onLogin={setCurrentUser} />} />
        <Route path="/login" element={<LoginForm currentUser={currentUser} onLogin={setCurrentUser}  />} />
        <Route path="/bands/:id" element={<BioPage bandList={bandList} currentUser={currentUser} />} />

      </Routes>
    </Router>
  );
}

export default App;
