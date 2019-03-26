import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Filters from './components/Filters/Filters';
import Tickets from './components/Tickets/Tickets';
import tickets from './tickets.json'

class App extends Component {
  constructor(props){
    super(props);
    this.currencyList=['RUB','USD','EUR'];
    this.stopQuantityList=['Без пересадок','1 пересадка', '2 пересадки', '3 пересадки'];
    this.state={
      activeCurrency:0,
      activeQuantity:[0]
    }
  }
  updateCurrency = e=>this.setState({
    activeCurrency: e
  });
  updateQuantity = e=>this.setState({
    activeQuantity: e
  });

  render() {
    return(
      <div className="App">
        <img src={logo} alt="logo" className="App__logo"></img>
        <div className="App__body">
          <Filters updateCurrency={this.updateCurrency} updateQuantity={this.updateQuantity} currencyList={this.currencyList} stopQuantityList={this.stopQuantityList} activeCurrency={this.state.activeCurrency} activeQuantity={this.state.activeQuantity}/>
          <Tickets tickets={tickets.tickets} activeCurrency={this.state.activeCurrency} currencyList={this.currencyList} activeQuantity={this.state.activeQuantity}/>
        </div>
      </div>
    )
  }
}

export default App;
