import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Filters from './components/Filters/Filters';
import Tickets from './components/Tickets/Tickets';
import tickets from './tickets.json'

class App extends Component {
  
  render() {
    return(
      <div className="App">
        <img src={logo} alt="logo" className="App__logo"></img>
        <div className="App__body">
          <Filters />
          <Tickets tickets={tickets}/>
        </div>
      </div>
    )
  }
}

export default App;
