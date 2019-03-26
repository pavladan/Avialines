import React, {PureComponent} from 'react';
import './Filters.scss'
import Currency from './Currency';
import StopQuantity from './StopQuantity';


export default class Filters extends PureComponent{
  onCurrencyClick= activeCur=>this.props.updateCurrency(activeCur);
  onQuantityClick=activeQuan=>{
    let aQ = this.props.activeQuantity;
    this.props.updateQuantity(aQ.indexOf(activeQuan)===-1 ? 
      aQ.concat(activeQuan) : 
      aQ.slice(0,aQ.indexOf(activeQuan)).concat(aQ.slice(aQ.indexOf(activeQuan)+1,aQ.length))
    )
  };
  onQuantityClickOnly=activeQuan=>{
    this.props.updateQuantity([activeQuan]);
  }

  render(){
      const currencyListli=this.props.currencyList.map((cur,index) => 
      <Currency  key={index} currencyName={cur} active={index === this.props.activeCurrency} onButtonClick={this.onCurrencyClick.bind(this,index)}/>
      )
      const stopQuantity=this.props.stopQuantityList.map((title,index)=>
      <StopQuantity key={index} title={title} active={this.props.activeQuantity.indexOf(index)>=0} onButtonClick={this.onQuantityClick.bind(this,index)} onButtonClickOnly={this.onQuantityClickOnly.bind(this,index)}/>
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
          <h3>Количество пересадок <span className="stop-quantity_all btn" onClick={()=>this.props.updateQuantity(this.props.stopQuantityList.map((e,index)=>index))}>Все</span></h3>
          <div className="stop-quantity-list">
            {stopQuantity}
          </div>
        </div>
      </div>
    )
  }
}