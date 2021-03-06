import React from "react";
import Blog from "./Blog";
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
                        <h1 id="slide">// News</h1>
                    </Col>
                    <Col>
                        <h1 id="slide-release">
                            // New Releases
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <Blog />
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