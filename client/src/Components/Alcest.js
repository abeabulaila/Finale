import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Review from "./Review";
import { useState, useEffect } from "react";

function Alcest({currentUser}) {
    const [band, setBand] = useState({reviews: []})
    useEffect(() => {
        fetch('/bands/66')
        .then(r => r.json())
        .then(data => setBand(data))
    }, [])

    return (
        <div>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col>
                        <h1 id="slide">// Alcest</h1>

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
                                <p className="review-text">Alcest is a French post-black metal band from Bagnols-sur-Cèze, founded and led by Neige (Stéphane Paut). It began in 2000 as a black metal solo project by Neige, soon a trio, but following the release of their first demo in 2001, band members Aegnor and Argoth left the band, leaving Neige as the sole member.In 2009 drummer Winterhalter from Les Discrets joined Alcest's line-up, after eight years with Neige as the sole full-time member. Since its creation, Alcest has released six studio albums and a number of EPs and split releases. Their fourth album, 2014's Shelter, marked a dramatic shift towards a distinctly shoegaze sound, however their subsequent album Kodama marked a return to their earlier blackgaze sound. The band are widely credited with pioneering the blackgaze/post-black metal genre, particularly through their EP Le Secret released in 2005.
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
                                <h2 className="song-title"> Spiritual Instinct - 2019</h2>
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=1345717582/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://alcest.bandcamp.com/album/spiritual-instinct">Spiritual Instinct by Alcest</a></iframe>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="song-div">
                                <h2 className="song-title"> Kodama - 2016</h2>
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=3672356025/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://alcest.bandcamp.com/album/kodama">Kodama by Alcest</a></iframe>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="song-div">
                                <h2 className="song-title"> Les Voyages De L'Âme - 2012 </h2>
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=2363589082/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://alcest.bandcamp.com/album/les-voyages-de-l-me">Les Voyages De L&#39;Âme by Alcest</a></iframe>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>


    )
}

export default Alcest