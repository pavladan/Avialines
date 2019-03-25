import React, {PureComponent} from 'react';
import './Filters.scss'
import Currency from './Currency';
import StopQuantity from './StopQuantity';


export default class Filters extends PureComponent{
  constructor(props){
    super(props);
    this.currencyList=['RUB','USD','EUR'];
    this.stopQuantityList=['Все','Без пересадок','1 пересадка', '2 пересадки', '3 пересадки'];
    this.state={
      activeCurrency:0,
      activeQuantity:[0]
    }
  }
  onCurrencyClick= activeCur=>this.setState({
    activeCurrency: activeCur
  })
  onQuantityClick=activeQuan=>this.setState({
    activeQuantity: this.state.activeQuantity.indexOf(activeQuan)===-1 ? 
      this.state.activeQuantity.concat(activeQuan) : 
      this.state.activeQuantity.slice(0,this.state.activeQuantity.indexOf(activeQuan)).concat(this.state.activeQuantity.slice(this.state.activeQuantity.indexOf(activeQuan)+1,this.state.activeQuantity.length))
  });
  onQuantityClickOnly=activeQuan=>{
    this.setState({
    activeQuantity:[activeQuan]
  })
}
  render(){
      const currencyListli=this.currencyList.map((cur,index) => 
      <Currency  key={index} currencyName={cur} active={index === this.state.activeCurrency} onButtonClick={this.onCurrencyClick.bind(this,index)}/>
      )
      const stopQuantity=this.stopQuantityList.map((title,index)=>
      <StopQuantity key={index} title={title} active={this.state.activeQuantity.indexOf(index)>=0} onButtonClick={this.onQuantityClick.bind(this,index)} onButtonClickOnly={this.onQuantityClickOnly.bind(this,index)}/>
      )
    return (
      <div className="Filters">
        <div className="Filters__part">
          <h3>Валюта</h3>
          <div className="currency-list">
            {currencyListli}
          </div>
        </div>
        <div className="Filters__part">
          <h3>Количество пересадок</h3>
          <div className="stop-quantity-list">
            {stopQuantity}
          </div>
        </div>
      </div>
    )
  }
}