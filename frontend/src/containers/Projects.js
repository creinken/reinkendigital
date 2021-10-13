import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import Featured from './Featured';
import Others from './Others';


class Projects extends Component {
    render() {
        return (
            <Container>
               <Featured/>
               <Others/>
            </Container>
        )
    }
}

export default Projects