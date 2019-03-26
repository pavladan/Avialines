import React,{Component} from 'react'
import Ticket from './Ticket';
import './Tickets.scss'

export default class Tickets extends Component{
  render(){
    const ticket = this.props.tickets.filter(tick=>this.props.activeQuantity.includes(tick.stops)).map((tick,index)=>
         <Ticket key={index} ticketInfo={tick}/>
    );
    return(
      <div className="Tickets">
        {ticket}
      </div>
      )
  }
}