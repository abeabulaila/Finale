import React from "react";
import { Container, Row, Col } from 'react-bootstrap'

function Mastodon() {




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
                                <p className="review-text">GAS is the main musical project of German electronic musician and composer Wolfgang Voigt born 1961. The project was created as an expressive medium inspired by his experiences with taking LSD in the Königsforst, a German forest situated near his hometown of Cologne, for long periods in his youth. He has claimed that the intention of the project is to "bring the forest to the disco, or vice-versa". Gas's music is primarily regarded as ambient techno and minimal techno, combining ambient music and 4/4 techno. It is the most abstract of Voigt's many projects, with albums consisting of several long untitled tracks. All Gas material shares a characteristic sound, based on a hazy ambient wash of drones and sampled loops, "barely-audible fragments of horns, strings, record hiss and wind", usually accompanied by a four-on-the-floor kick drum.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <div className="song-div">
                                <h2 className="song-title"> GAS - Pop</h2>
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                    <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=810155818/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://kompakt-gas.bandcamp.com/album/pop">Pop by GAS</a></iframe>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="song-div">
                                <h2 className="song-title"> GAS - Zauberberg</h2>
                                <div style={{ borderTop: "2.5px solid #FE938C ", marginRight: 100, marginBottom: "10px", marginTop: -10 }}></div>
                                <div>
                                    <iframe style={{ border: 0, width: "550px", height: "120px", borderRadius: "15px 40px 10px 40px", marginLeft: '4px' }} src="https://bandcamp.com/EmbeddedPlayer/album=2303878530/size=large/bgcol=333333/linkcol=e99708/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://kompakt-gas.bandcamp.com/album/zauberberg">Zauberberg by GAS</a></iframe>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <h1 id="slide-release">
                        // Reviews
                        </h1>
                </Row>
            </Container>
        </div>


    )
}

export default Mastodon