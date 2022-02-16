import BandCard from "./BandCard";

function Artists({ bandList }) {
    return (
        <div>
            <div id="slide-artist" className="capture">
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
                            id={band.id}
                            band={band}
                        />
                    )
                })}
            </div>

            <div id="slider" className="capture-bottom">
                <h1 className="capture-title-bottom"> More Coming...</h1>
            </div>
        </div>
    )
}

export default Artists