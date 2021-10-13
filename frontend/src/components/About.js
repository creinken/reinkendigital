import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <h3><span>01.</span>About Me</h3><hr/>
                </Row>
                <Row>
                    <p>Hello. My name is Christopher, and coding is my passion.
                    </p>
                </Row>
            </Container>
        )
    }
}

export default About