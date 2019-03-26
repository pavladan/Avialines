import React,{Component} from 'react'
import Ticket from './Ticket';
import './Tickets.scss'

export default class Tickets extends Component{
  constructor(props){
    super(props)
    this.state={
    error:null,
    isLoaded:false,
    daily :{}
  }
  }
  
  componentDidMount(){
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded:true,
          daily : result
        });        
      },
      (error)=>{
        this.setState({
          isLoaded:true,
          error
        });
      }
    )
  }
  render(){
    const { error, isLoaded, daily } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {  
      let currencyK,currencyS;
      switch (this.props.currencyList[this.props.activeCurrency]) {
        case 'USD':
          currencyK = daily.Valute.USD.Value;currencyS='$';
          break;
        case 'EUR':
          currencyK = daily.Valute.EUR.Value;currencyS='€'
          break;
        default: 
          currencyK = 1;currencyS='₽'
          break;
      }
      const ticket = this.props.tickets.filter(tick=>this.props.activeQuantity.includes(tick.stops)).map((tick,index)=>
          <Ticket key={index} ticketInfo={tick} currencyK={currencyK} currencyS={currencyS}/>
      );
      
      return(
        <div className="Tickets">
          {ticket}
        </div>
        )
    }
  }
}