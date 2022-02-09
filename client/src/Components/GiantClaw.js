import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from "react";
import Review from "./Review";
function GiantClaw({currentUser}) {
  const [band, setBand] = useState({reviews: []})
    
    useEffect(() => {
        fetch('/bands/37')
        .then(r => r.json())
        .then(data => setBand(data))
    }, [])



    return (
        <div>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col>
                        <h1 id="slide">// Giant Claw</h1>
                    </Col>
                    <Col>
                        <h1 id="slide-release">
                        // Music
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="review-div">
                            <div >
                                <h2 className="review-title"> Biography </h2>
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 50, marginLeft: 30, marginBottom: "10px", marginTop: -10 }}>
                                </div>
                            </div >
                            <div >
                                <p className="review-text">
                                    Artist Keith Rankin, from Columbus, Ohio is the co-owner of Orange Milk Records. He produces extensible digital art, as well as experimental music under the name Giant Claw.
                                </p>
                            </div>
                        </div>
                        <Row>
                            <h1 id="slide-release">
                        // Reviews
                            </h1>
                            <Review band={band} reviews={band.reviews} currentUser={currentUser} />
                        </Row>
                    </Col>
                    <Col>
                        <div className="song-div">
                            <h2 className="song-title">Giant Claw - "Orange Milk" </h2>
                            <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                            <div>
                                <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=2082484105/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://staticshockrecords.bandcamp.com/album/warthog">Orange Milk by Giant Claw</a></iframe>

                            </div>
                        </div>
                        <div>
                            <div className="song-div">
                                <h2 className="song-title">Giant Claw - "Mirror Guide"</h2>
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                    <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=1087983159/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://giantclaw.bandcamp.com/album/mirror-guide">Mirror Guide by Giant Claw</a></iframe>
                                </div>
                            </div>
                        </div>

                        <div className="song-div">
                            <h2 className="song-title">Giant Claw - "Orange Milk" </h2>
                            <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                            <div>
                                <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=2036094323/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://giantclaw.bandcamp.com/album/dark-web">DARK WEB by Giant Claw</a></iframe>

                            </div>
                        </div>
                    </Col>
                 
                </Row>
            </Container>
        </div>


    )
}

export default GiantClaw