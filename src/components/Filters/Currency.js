import React, {Component} from 'react'
import './Currency.scss';

export default class Currency extends Component{
  render(){
    return(
      <div className={this.props.active ? 'btn__currency active' : 'btn__currency'} onClick={this.props.onButtonClick}>
        {this.props.currencyName}
      </div>
    )
  }
}