import React from 'react'
import { Nav } from './Nav/Nav'

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="/img/pizza.png" alt="" />
        <h2>Pizza Shaft</h2>
      </div>
      <Nav />
    </header>
  )
}