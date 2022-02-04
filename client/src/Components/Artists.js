import React from "react";
import BandCard from "./BandCard";
import { useState, useEffect } from "react";

function Artists() {
    const [bandList, setBandList] = useState([{}])

    useEffect(() => {
        fetch('/bands')
            .then(r => r.json())
            .then(data => setBandList(data))

    }, [])
    console.log(bandList)


    return (
        <div>
            <h1> All Artists</h1>
            <div className="band-holder">
                {bandList.map(band => {
                    return (
                        <BandCard
                            key={band.id}
                            bandName={band.band_name}
                            img={band.img}
                            album={band.album}
                            genre={band.genre}
                        />

                    )
                })}
            </div>
        </div>
    )
}

export default Artists