import React from "react";
import ReviewHolder from "./ReviewHolder";
import SongHolder from "./SongHolder";
import { Container, Row, Col } from 'react-bootstrap'
import logo from "./Images/recordlogo.png"
function Welcome() {

    return (
        <div>
            <div className="intro">
                <h2> <em> "Home of That Good Stuff." </em></h2>
            </div>
            <Container>
                <Row>
                    <Col>
                        <h1>// News</h1>

                    </Col>
                    <Col>
                        <h1>
                            // New Releases
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <ReviewHolder />
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <SongHolder />
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="intro">
            <img className="logo-page" src={logo} />
            </div>
        </div>
    )
}

export default Welcome