import React from "react";


function SongHolder() {

    return (
        <div>

        <div className="song-div">
            <h2 className="song-title"> Retail - "Dead"</h2>
            <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10  }}></div>
           <div>
           <iframe style={{border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px'}} src="https://bandcamp.com/EmbeddedPlayer/album=1630100310/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://retailband.bandcamp.com/album/dead">DEAD by RETAIL</a></iframe>
           </div>
        </div>

        <div className="song-div">
            <h2 className="song-title">Warthog - "Warthog"</h2>
            <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10  }}></div>
           <div>
           <iframe style={{border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px'}} src="https://bandcamp.com/EmbeddedPlayer/album=3945172530/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://staticshockrecords.bandcamp.com/album/warthog">Warthog by Warthog</a></iframe>

           </div>
        </div>

        <div className="song-div">
            <h2 className="song-title">Giant Claw - "Orange Milk" </h2>
            <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10  }}></div>
           <div>
           <iframe style={{border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px'}} src="https://bandcamp.com/EmbeddedPlayer/album=2082484105/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://staticshockrecords.bandcamp.com/album/warthog">Orange Milk by Giant Claw</a></iframe>

           </div>
        </div>





        </div>
    )
}
export default SongHolder