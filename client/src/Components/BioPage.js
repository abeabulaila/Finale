import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Review from "./Review";

function BioPage({ currentUser }) {

    const [band, setBand] = useState({ reviews: [] })
    let { id } = useParams();
    useEffect(() => {
        fetch(`/bands/${id}`)
            .then(r => r.json())
            .then(data => setBand(data))
    }, [])

    return (
        <div>
            <Container>
                <Row style={{ marginTop: '50px' }}>
                    <Col>
                        <h1 id="slide">// {band.band_name} </h1>
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
                                <p className="review-text">{band.bio}</p>
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
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                    <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src={band.player} seamless></iframe>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="song-div">
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                    <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src={band.player2} seamless></iframe>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="song-div">
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                    <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src={band.player3} seamless></iframe>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >

    )
}

export default BioPage



