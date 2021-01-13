import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import '../Home.css';

class Home extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col md={6} sm={12}>
                        <img id="binaryface" src="Resources/man-475559_640.jpg" />
                    </Col>

                    <Col md={6} sm={12}>
                        <h1>Christopher Reinken</h1>
                        <hr />

                        <p class="text">Thank you for visiting. I am an independent Information Technology specialist with experience in
                            anything from basic PC troubleshooting to network switching and routing to programming in React, Ruby, and
                            others.</p>
                    </Col>
                </Row>

                <Row>
                    <Col xl={12}>
                        <p class="text" id="secPara">I have been working with computers and home office computing for over 15 years, either for myself,
                            friends and family, or for my grandfather’s home business. I am always continuing my education, and hope to
                            break into the career that has been my passion for longer than I can remember. So please, take a look around. If you
                            like what you see, you can <NavLink to="/contact" exact>contact me</NavLink> at any time. Have a great day!
                        </p>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Home
