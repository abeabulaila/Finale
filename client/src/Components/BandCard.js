import React from "react";
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Review from "./Review";
import Warthog from "./Warthog";
import BioPage from "./BioPage";

function BandCard({ bandName, album, genre, img, id, currentUser, band }) {
    let navigate = useNavigate();
    // const [band, setBand] = useState({reviews: []})


    function onClick(){
        //dynamically render routes to bands pages by setting this function on the img
        //useNavigate and interpolate the route by using the bandName: navigate(/${bandName})
        //this way whenever the img is clicked it will head to a route stated in app.js to a component of the band with the same name./../
        // fetch(`/bands/${id}`)
        // .then(r => r.json())
        // .then(data => setBand(data))
        
        console.log(bandName)
        navigate(`/bands/${id}`)
        return (
            <BioPage
            key={id}
            bandName={bandName}
            band={band}
            />
            )
    }

    return (
        <div className="band-div">
            <h2>{bandName}</h2>
            <div className="artist-line"></div>
            <>
            </>
            <img onClick={onClick} className="band-img" src={img} />
            <h4 style={{marginTop: '-5px'}} >{album}</h4>
            <h6 style={{marginTop: '-10px'}}><em> {genre} </em></h6>
        </div>
    )

}

export default BandCard