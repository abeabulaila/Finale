import React from "react";

function BandCard({ bandName, album, genre, img }) {


    return (
        <div>
            <h2>{bandName}</h2>
            <img src={img} />
            <h4>{album}</h4>
            <h5>{genre}</h5>
        </div>
    )

}

export default BandCard