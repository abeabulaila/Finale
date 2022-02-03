import React from "react";


function SongHolder() {

    function show(){
        return (
            <iframe style={{border: 0, width: "100%", height: "120px"}} src="https://bandcamp.com/EmbeddedPlayer/album=1630100310/size=large/bgcol=333333/linkcol=9a64ff/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://retailband.bandcamp.com/album/dead">DEAD by RETAIL</a></iframe>

        )
    }

    return (
        <div className="song-div">
            <h2> Retail - Dead</h2>
            <div style={{ borderTop: "2.5px solid #FF0000 ", marginRight: 100, marginBottom: "10px" }}></div>
           <div>
               {show()}
           </div>
        </div>
    )
}
export default SongHolder