import React from "react";
import BandCard from "./BandCard";

function Artists({bandList}) {


    return (
        <div>
            <div className="capture">
            <h1 className="capture-title"> All Artists</h1>
            </div>
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

            <div className="capture-bottom">
            <h1 className="capture-title-bottom"> More Coming...</h1>
            </div>
            <div>
               {/* render footer page here.... maybe make a seperate component and then just import it here.. or everywhere under app.js like how i did the navbar..... */}
            </div>
        </div>
    )
}

export default Artists