import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../Home.css';

class Home extends Component {

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <img id="binaryface" src="Resources/man-475559_640.jpg" />
                    </div>

                    <div class="col-md-6 col-sm-12">
                        <h1>Christopher Reinken</h1>
                        <hr />

                        <p class="text">Thank you for visiting. I am an independent Information Technology specialist with experience in
                            anything from basic PC troubleshooting to network switching and routing to programming in React, Ruby, and
                            others.</p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xl-12">
                        <p class="text" id="secPara">I have been working with computers and home office computing for over 15 years, either for myself,
                            friends and family, or for my grandfather’s home business. I am always continuing my education, and hope to
                            break into the career that has been my passion for longer than I can remember. So please, take a look around. If you
                            like what you see, you can <NavLink to="/contact" exact>contact me</NavLink> at any time. Have a great day!
                        </p>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home
