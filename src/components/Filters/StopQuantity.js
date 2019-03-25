import React, {Component} from 'react'
import './StopQuantity.scss'

export default class StopQuantity extends Component{

  render(){

    return(
      <div className={this.props.active ? "stop-quantity active" : "stop-quantity"} onClick={this.props.onButtonClick}>
        <div className="stop-quantity__check-box">

        </div> 
        <p className="stop-quantity__title">{this.props.title}</p>
        <div className="stop-quantity__btn-only" onClick={(e)=>{e.stopPropagation();return this.props.onButtonClickOnly();}}>Только</div>
      </div>
    )
  }
}