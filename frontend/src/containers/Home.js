import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../Home.css';
import Introduction from '../components/Introduction';

class Home extends Component {

    render() {
        return (
            <Introduction/>
        )
    }
}

export default Home
