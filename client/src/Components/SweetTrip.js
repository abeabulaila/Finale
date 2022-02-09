import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from "react";
import Review from "./Review"

function SweetTrip({currentUser}) {
    const [band, setBand] = useState({ reviews: [] })

    useEffect(() => {
        fetch('/bands/43')
            .then(r => r.json())
            .then(data => setBand(data))
    }, [])


    return (
        <div>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col>
                        <h1 id="slide">// Sweet Trip</h1>

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
                                <p className="review-text">Sweet Trip is an electronic/experimental rock act formed in 1993 in the Bay Area of California, United States, currently consisting of musician Roberto Burgos. They are known for their dreamy soundscapes and dense production techniques, often blending alternative rock subgenres with intelligent dance music
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
                                <h2 className="song-title"> A Tiny House, In Secret Speeches, Polar Equals - 2021</h2>
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=215652981/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://sweettrip.bandcamp.com/album/a-tiny-house-in-secret-speeches-polar-equals">A Tiny House, In Secret Speeches, Polar Equals by Sweet Trip</a></iframe>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="song-div">
                                <h2 className="song-title"> You Will Never Know Why - 2014</h2>
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=432659920/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://sweettrip.bandcamp.com/album/you-will-never-know-why">You Will Never Know Why by Sweet Trip</a></iframe>
                                </div>
                            </div>
                        </div>
                    </Col>
        
                </Row>
            </Container>
        </div>


    )
}

export default SweetTrip