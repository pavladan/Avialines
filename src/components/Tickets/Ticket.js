import React, {Component} from 'react'
import turkish_airlines from '../../img/turkish_airlines.png'
import './Ticket.scss'

export default class Ticket extends Component{
  render(){
    return(
      <div className="Ticket">
        <div className="Ticket__buy">
          <img src={turkish_airlines} alt="turkish_airlines" className="Ticket__logo" />
          <div className="Ticket__buy-btn btn">Купить за {this.props.ticketInfo.price}Р</div>
        </div>
        <div className="Ticket__info">
          <div className="Ticket__info-from">
            <div className="time">{this.props.ticketInfo.departure_time}</div>
            <div className="place">{this.props.ticketInfo.origin}, {this.props.ticketInfo.origin_name}</div>
            <div className="date">{this.props.ticketInfo.departure_date}</div>
          </div>
          <div className="Ticket__info-stops">
            {(this.props.ticketInfo.stops === 1 && this.props.ticketInfo.stops + ' пересадка') || (this.props.ticketInfo.stops > 1 && this.props.ticketInfo.stops + ' пересадки') } 
          </div>
          <div className="Ticket__info-to">
            <div className="time">{this.props.ticketInfo.arrival_time}</div>
            <div className="place">{this.props.ticketInfo.destination}, {this.props.ticketInfo.destination_name}</div>
            <div className="date">{this.props.ticketInfo.arrival_date}</div>
          </div>
        </div>
      </div>
    )
  }
}