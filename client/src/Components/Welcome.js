import React from "react";
import ReviewHolder from "./ReviewHolder";
import SongHolder from "./SongHolder";
import { Container, Row, Col } from 'react-bootstrap'
function Welcome() {

    return (
        <div>
            <h1>Infinite Spirit Records</h1>
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
        </div>
    )
}

export default Welcome