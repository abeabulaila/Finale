import React from "react";
import BandCard from "./BandCard";

function BandPage({ bandList }) {


    // function getBand() {

    //     bandList.filter((band) => band === bandList.band_name); {
    //         return (
    //             <BandCard
    //                 key={bandList.id}
    //                 bandName={bandList.band_name}
    //                 img={bandList.img}
    //                 album={bandList.album}
    //                 genre={bandList.genre}
    //             />

    //         )
    //     }
    // }


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