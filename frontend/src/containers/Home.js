import React, { Component } from 'react';
import '../Home.css';
import Introduction from '../components/Introduction';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from './Projects';

class Home extends Component {

    render() {
        return (
            <>
                <Introduction/>
                <About/>
                <Projects/>
            </>
        )
    }
}

export default Home
