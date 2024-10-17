import React from 'react'
import Header from "./header"
// import Header from './header'
import Datacontext from '../context/Datacontext'
import { useContext as context } from 'react'
const History = () => {
  const {cart} =context(Datacontext)
  return (
    < >
  
      <Header  cart={cart.length} /> 


        <div className="hsit">
          <h1>no history</h1>
        </div>
    </>
  )
}

export default History