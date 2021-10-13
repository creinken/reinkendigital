import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';

class Introduction extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <h6>Hi, my name is</h6>
                </Row>
                <Row>
                    <h1>Christopher Reinken.</h1>
                </Row>
                <Row>
                    <p>I'm a software engineer specializing in building
                        high quality web applications in Rails and React.
                    </p>
                </Row>
            </Container>
        )
    }
}

export default Introduction