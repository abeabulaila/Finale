import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from "react";
import Review from "./Review"

function Warthog({ currentUser }) {
    const [band, setBand] = useState({ reviews: [] })
    useEffect(() => {
        fetch('/bands/75')
            .then(r => r.json())
            .then(data => setBand(data))
    }, [])



    return (
        <div>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col>
                        <h1 id="slide">// Warthog</h1>

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
                                <p className="review-text">Warthog don't do albums. Since their 2012 formation, the New York band — which comprises former Men bassist Chris Hansell, plus members of Nude Beach, Dawn of Humans, Creem and Nomos — have abided by one of hardcore's most sacrosanct principles: Keep the releases coming, but keep them short, loud and filler-free.
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
                                <h2 className="song-title"> LIVE! - 2019</h2>
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=3472287316/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://warthognyc.bandcamp.com/album/live">LIVE! by Warthog</a></iframe>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="song-div">
                                <h2 className="song-title"> S/T - 2018</h2>
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=3041566802/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://warthognyc.bandcamp.com/album/s-t">S/T by Warthog</a></iframe>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="song-div">
                                <h2 className="song-title"> Warthog - 2016</h2>
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=1164381289/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://warthognyc.bandcamp.com/album/warthog">Warthog by Warthog</a></iframe>
                                </div>
                            </div>
                        </div>
                  
                        <div>
                            <div className="song-div">
                                <h2 className="song-title"> Prison - 2014</h2>
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=1413112296/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://warthognyc.bandcamp.com/album/prison">Prison by Warthog</a></iframe>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div className="song-div">
                                <h2 className="song-title"> Exterminate Me - 2014</h2>
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=1576947060/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://warthognyc.bandcamp.com/album/exterminate-me">Exterminate Me by Warthog</a></iframe>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="song-div">
                                <h2 className="song-title"> DEMO - 2012</h2>
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=936426782/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://warthognyc.bandcamp.com/album/demo">Demo by Warthog</a></iframe>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>


    )
}

export default Warthog