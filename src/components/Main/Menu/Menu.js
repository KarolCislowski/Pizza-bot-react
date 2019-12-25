import React from 'react'

import { Pizza } from './Pizza/Pizza'

export const Menu = ({ menu, quantityChangeHandler }) => {
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