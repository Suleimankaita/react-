import React from 'react'
import Header from "./header"
import Datacontext from './context/Datacontext'
import { useContext as context } from 'react'
const History = () => {
  const {cart} =context(Datacontext)
  return (
    <div>
      <Header cart={cart.length}/> 


        <div className="hsit">
          <h1>no history</h1>
        </div>
    </div>
  )
}

export default History