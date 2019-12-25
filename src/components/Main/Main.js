import React, { useState } from 'react'
import { Menu } from './Menu/Menu'
import data from '../../data/menu.json'

export const Main = () => {
  const [prepTime, setPrepTime] = useState(0)
  const [price, SetPrice] = useState(0)
  const [menu, setMenu] = useState(data)
  const quantityChangeHandler = (index, quantity) => {
    const tempMenu = menu
    tempMenu[index].quantity = quantity
    console.log(tempMenu)
    setMenu(() => tempMenu)
  }

  return (
    <main>
      <Menu
        menu={menu}
        quantityChangeHandler={quantityChangeHandler} />
    </main>
  )
}