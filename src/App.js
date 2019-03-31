import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import MainHeader from './Header/MainHeader';
import FooterComponent from './Footer/Footer';
import MainBody from './Body/MainBody';
import RightMenu from './Body/RightMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader />
        <div className="BodyComponents">
          <div className="Left" >
            <MainBody />
          </div>
          <div className="Right">
            <RightMenu />
          </div>
        </div>
        <FooterComponent/>
      </div>
    );
  }
}

export default App;
