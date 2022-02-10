import { Container, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Review from "./Review";

function BioPage() {
    const [band, setBand] = useState({})

let { id } = useParams();



useEffect(() => {
    fetch(`/bands/${id}`)
    .then(r => r.json())
    .then(data => setBand(data))
}, [])
console.log(band.band_name)
   
   return(
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
            </Container>
        </div>

    )
}

export default BioPage