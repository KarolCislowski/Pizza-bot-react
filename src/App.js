import React from 'react'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Main } from './components/Main/Main.js'

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Main />
    </div>
  )
}
