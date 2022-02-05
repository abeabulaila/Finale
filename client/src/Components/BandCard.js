import React from "react";
import { useNavigate } from 'react-router-dom'


function BandCard({ bandName, album, genre, img }) {
    let navigate = useNavigate();


    function onClick(){
        //dynamically render routes to bands pages by setting this function on the img
        //useNavigate and interpolate the route by using the bandName: navigate(/${bandName})
        //this way whenever the img is clicked it will head to a route stated in app.js to a component of the band with the same name./../

        navigate(`/${bandName}`)
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