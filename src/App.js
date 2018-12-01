import React, { Component } from 'react';
import Header from './components/Header.js';
import './App.css'
import Routes from './routes'


class App extends Component {

  render() {
    return (
      <div className="main">
        <div className="header_container">
            <Header/>
        </div>
        <div className='body_container' >
        {Routes}
         </div>
      </div>
    );
  }
}

export default App;
