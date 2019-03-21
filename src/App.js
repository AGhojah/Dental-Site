import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainHeader from './Header/MainHeader';
import FooterComponent from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div> Hello World</div>
        <MainHeader />
        <FooterComponent/>
      </div>
    );
  }
}

export default App;
