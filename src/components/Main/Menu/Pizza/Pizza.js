import React, { useState } from 'react'

export const Pizza = ({ name, toppings, price, quantity, onQuantityChange, index }) => {
  const [quantityState, setQuantityState] = useState(quantity)
  const addHandler = () => {
    setQuantityState((oldState) => (oldState + 1))
    onQuantityChange(index, quantityState)
  }
  const subHandler = () => {
    setQuantityState((oldState) => (oldState - 1))
    onQuantityChange(index, quantityState)
  }
  return (
    <div className="menu-item">
      <span className="pizza-name">
        <h4>{name}</h4>
        <p>({toppings.map((topping) => topping).join(', ')})</p>
      </span>
      <p className="price">${price}SEK
        <button type="button" className={(quantityState <= 0) ? 'quantity hide' : 'quantity'} onClick={subHandler}>-</button>
        <input type="text" className="quantity-display" disabled value={quantityState} />
        <button type="button" className="quantity" onClick={addHandler}>+</button>
      </p>
    </div>
  )
}