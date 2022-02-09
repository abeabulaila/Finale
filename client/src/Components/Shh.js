import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from "react";
import Review from "./Review"

function Shh({ currentUser }) {
    const [band, setBand] = useState({ reviews: [] })

    useEffect(() => {
        fetch('/bands/42')
            .then(r => r.json())
            .then(data => setBand(data))
    }, [])


    return (
        <div>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col>
                        <h1 id="slide">// SHXCXCHCXSH</h1>

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
                                <p className="review-text">Shxchxchxsh has became synonymous to haunting and abstract experimental techno. With the intricate balance between light and dark as well as the realms of drone, noise and techno their productions must be described as versatile and broad.
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
                                <h2 className="song-title"> SsSsSsSsSsSsSsSsSsSsSsSsSs - 2016</h2>
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                    <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=939909594/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://avianstore.bandcamp.com/album/ssssssssssssssssssssssssssssss">SsSsSsSsSsSsSsSsSsSsSsSsSsSsSs by SHXCXCHCXSH</a></iframe>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="song-div">
                                <h2 className="song-title"> Linear S Decoded - 2014</h2>
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                    <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=831159148/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://avianstore.bandcamp.com/album/linear-s-decoded">Linear S Decoded by SHXCXCHCXSH</a></iframe>
                                </div>
                            </div>
                        </div>
                    </Col>
                  
                </Row>
            </Container>
        </div>


    )
}

export default Shh