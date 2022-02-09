import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from "react";
import Review from "./Review";

function RendezVous({currentUser}) {
    const [band, setBand] = useState({reviews: []})

    useEffect(() => {
        fetch('/bands/40')
        .then(r => r.json())
        .then(data => setBand(data))
        //.then(setReviews(band.reviews))
    }, [])
    
    return (
        <div>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col>
                        <h1 id="slide">// Rendez Vous</h1>

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
                                <p className="review-text">Rendez Vous is a post-punk/new-wave band from Paris. They were founded in 2012 by Francis Mallari and Elliot Bethault. A few months later, they added Maxime Gendre and Simon Dubourg. The band released their first EP in 2014, Rendez-Vous, for Zappruder Records. The band start touring across Europe in the summer of 2015.
                                </p>
                            </div>
                        </div>
                        <h1 id="slide-release">
                        // Reviews
                        </h1>
                     <Review band={band} reviews={band.reviews} currentUser={currentUser} />
                    </Col>
                    <Col>
                        <div>
                            <div className="song-div">
                                <h2 className="song-title"> SUPERIOR STATE - 2018</h2>
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=4083508719/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://rendezvousrendezvous.bandcamp.com/album/superior-state">SUPERIOR STATE by RENDEZ VOUS</a></iframe>
                                 </div>
                            </div>
                        </div>
                        <div>
                            <div className="song-div">
                                <h2 className="song-title"> Distance - 2016</h2>
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=3534909906/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/track=522519929/transparent=true/" seamless><a href="https://avantrecords.bandcamp.com/album/distance">Distance by RENDEZ-VOUS</a></iframe>                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="song-div">
                                <h2 className="song-title"> Rendez-Vous EP - 2014</h2>
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=3916666291/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://rendezvousrendezvous.bandcamp.com/album/rendez-vous-ep">Rendez-Vous EP by RENDEZ VOUS</a></iframe>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>


    )
}

export default RendezVous