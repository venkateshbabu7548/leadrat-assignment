import {Component} from 'react'

import Selection from './components/Selection'
import SeatingLayout from './components/SeatingLayout'
import ProceedButton from './components/ProceedButton'

import './App.css'

const TicketTypeList = [
  {id: 'STANDARD', text: 'Standard'},
  {id: 'PREMIUM', text: 'Premium'},
]
const QuantityList = [
  {id: 1, quantity: 1},
  {id: 2, quantity: 2},
  {id: 3, quantity: 3},
  {id: 4, quantity: 4},
  {id: 5, quantity: 5},
  {id: 6, quantity: 6},
  {id: 7, quantity: 7},
  {id: 8, quantity: 8},
  {id: 9, quantity: 9},
  {id: 10, quantity: 10},
]

class App extends Component {
  state = {ticketType: TicketTypeList[0].id, quantity: QuantityList[0].id}

  onChangeTicketType = type => {
    this.setState({ticketType: type})
  }

  onChangeTicketQuantity = qty => {
    this.setState({quantity: qty})
  }

  render() {
    return (
      <div className="bg-container">
        <Selection
          TicketTypeList={TicketTypeList}
          QuantityList={QuantityList}
          onChangeTicketType={this.onChangeTicketType}
          onChangeTicketQuantity={this.onChangeTicketQuantity}
        />
        <SeatingLayout />
        <ProceedButton />
      </div>
    )
  }
}

export default App
