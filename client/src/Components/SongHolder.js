import React from "react";


function SongHolder() {

    return (
        <div className="song-div">
            <h2 className="song-title"> Retail - Dead</h2>
            <div style={{ borderTop: "2.5px solid #FF0000 ", marginRight: 100, marginBottom: "10px", marginTop: -10  }}></div>
           <div>
           <iframe style={{border: 0, width: "450px", height: "120px", borderRadius: "15px 40px 10px 40px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1630100310/size=large/bgcol=333333/linkcol=9a64ff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://retailband.bandcamp.com/album/dead">DEAD by RETAIL</a></iframe>
           </div>
        </div>
    )
}
export default SongHolder