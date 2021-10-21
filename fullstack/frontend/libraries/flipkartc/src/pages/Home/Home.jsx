import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cardss from '../../components/cardss/Cardss'
import Carouselss from '../../components/carouselss/Carouselss'
import Navbarss from '../../components/navbarss/Navbarss'

import img1 from '../../assets/img/1.jpg'
import img2 from '../../assets/img/2.jpg'
import img3 from '../../assets/img/4.jpg'

function Home() {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <Navbarss />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>

                        <Carouselss />
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Cardss  img={img1}/>

                    </Col>
                    <Col>
                        <Cardss img={img2}/></Col>
                    <Col>
                        <Cardss img={img3}/></Col>
                </Row>

            </Container>
        </>
    )
}

export default Home
