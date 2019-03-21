import React, { Component } from 'react';
import './Header.css';

class MainHeader extends Component {


    render(){
        let ulStyle = {display: 'inline-flex'};


        return (
            <header style={{backgroundColor: 'rgba(150,140,140,0.7)'}}>
                <div className='logo'>
                    <img src="" alt="Website Cover" srcset=""/>
                </div>

                <nav>
                    <ul style={ulStyle}>
                        <li>
                            <a href="http://google.com">Home</a>
                        </li>
                        <li>
                            <a href="http://google.com">Company Profile</a>
                        </li>
                        <li>
                            <a href="http://google.com">Services</a>
                        </li>
                        <li>
                            <a href="http://google.com">Appointment</a>
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