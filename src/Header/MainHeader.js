import React, { Component } from 'react';
import './Header.css';
import {Button} from 'react-bootstrap';

class MainHeader extends Component {


    render(){
        let ulStyle = {display: 'inline-flex'};


        return (
            <header style={{backgroundColor: 'rgba(150,140,140,0.7)'}}>
                <div className='logo'>
                    <img src="" alt="Website Cover"/>
                </div>

                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossorigin="anonymous"
                    />

                    <script src="https://unpkg.com/react/umd/react.production.js" crossorigin />

                    <script
                    src="https://unpkg.com/react-dom/umd/react-dom.production.js"
                    crossorigin
                    />

                    <script
                    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                    crossorigin
                />

                <script>var Alert = ReactBootstrap.Alert;</script>

                <nav>
                    <ul style={ulStyle}>
                        <li>
                            {/* <a href="http://google.com">Home</a> */}
                            <Button variant="primary">Home</Button>
                        </li>
                        <li>
                            {/* <a href="http://google.com">Company Profile</a> */}
                            <Button variant="outline-primary">Company Profile</Button>
                        </li>
                        <li>
                            {/* <a href="http://google.com">Services</a> */}
                            <Button variant="outline-primary">Services</Button>
                        </li>
                        <li>
                            {/* <a href="http://google.com">Appointment</a> */}
                            <Button variant="outline-primary">Appointment</Button>
                        </li>
                        <li>
                            <a href="http://google.com">FAQ</a>
                        </li>
                        <li>
                            <a href="http://google.com">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}


export default MainHeader;