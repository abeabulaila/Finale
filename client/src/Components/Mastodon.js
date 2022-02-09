import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from "react";
import Review from "./Review";

function Mastodon({currentUser}) {
    const [band, setBand] = useState({reviews: []})

    useEffect(() => {
        fetch('/bands/70')
        .then(r => r.json())
        .then(data => setBand(data))
        //.then(setReviews(band.reviews))
    }, [])
    



    return (
        <div>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col>
                        <h1 id="slide">// Mastodon</h1>

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
                                <p className="review-text">Mastodon is an American heavy metal band from Atlanta, Georgia, formed in 2000. They are quoted as "one of the preeminent metal acts of the early 21st century".
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
                                <h2 className="song-title"> Remission - 2014</h2>
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=3267479739/size=large/bgcol=333333/linkcol=e99708/artwork=small/transparent=true/" seamless><a href="https://relapsealumni.bandcamp.com/album/remission-remastered">Remission (Remastered) by Mastodon</a></iframe>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="song-div">
                                <h2 className="song-title"> Leviathan - 2004</h2>
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=105533117/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://relapsealumni.bandcamp.com/album/leviathan">Leviathan by Mastodon</a></iframe>                                </div>
                            </div>
                        </div>




                    </Col>
                 
                </Row>
            </Container>
        </div>


    )
}

export default Mastodon