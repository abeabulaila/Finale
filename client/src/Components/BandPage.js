import React from "react";
import BandCard from "./BandCard";

function BandPage({ bandList }) {

    //fetch request to dynamic endpoint picking id of the band that was clicked on
    //adding biography/bandcamp links onto back end "bands" table
    //adding review component for each one. same layout --> dynamic rendering


    function getBand() {
        bandList.filter(band => band.band_name == bandList.band_name);
        return (
            <BandCard
                key={bandList.id}
                bandName={bandList.band_name}
                img={bandList.img}
                album={bandList.album}
                genre={bandList.genre}
            />
        )
    }


    return (

        <div className="band-holder">
            <h1> yo</h1>
            {getBand}
        </div>
    )
}

export default BandPage