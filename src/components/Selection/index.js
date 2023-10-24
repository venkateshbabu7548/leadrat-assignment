import './index.css'

const Selection = props => {
  const {
    TicketTypeList,
    QuantityList,
    onChangeTicketType,
    onChangeTicketQuantity,
  } = props

  const onChangeTicket = event => {
    onChangeTicketType(event.target.value)
  }

  const onChangeQuantity = event => {
    onChangeTicketQuantity(event.target.value)
  }

  return (
    <div className="selection-container">
      <select className="select-ticket-type" onChange={onChangeTicket}>
        {TicketTypeList.map(eachType => (
          <option value={eachType.id} key={eachType.id}>
            {eachType.text}
          </option>
        ))}
      </select>
      <select className="select-quantity-type" onChange={onChangeQuantity}>
        {QuantityList.map(each => (
          <option value={each.id} key={each.id}>
            {each.quantity}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Selection
