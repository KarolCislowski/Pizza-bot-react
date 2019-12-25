import React, { useState } from 'react'
import data from '../../../data/menu.json'
import { Pizza } from './Pizza/Pizza'

export const Menu = () => {
  const [menu, setMenu] = useState(data)

  const quantityChangeHandler = (index, quantity) => {
    const tempState = menu
    tempState[index].quantity = quantity
    console.log(tempState)
    setMenu(() => tempState)
  }
  console.log(menu)
  return (
    <section className="menu">
      <h2>MENU</h2>
      {menu.map((e, index) => {
        return (<Pizza
          key={e.name}
          name={e.name}
          toppings={e.toppings}
          price={e.price}
          quantity={e.quantity}
          onQuantityChange={quantityChangeHandler}
          index={index} />
        )
      })}
    </section>
  )
}