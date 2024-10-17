import React from 'react'
import Datacontext from '../context/Datacontext'
import { useContext as context } from 'react'
import Header from './header'
const Delivery = () => {
  const {cart } = context(Datacontext)
  return (
    <>
      <Header  cart={cart.length}/> 

      <div className="hsit">
          <h1>no Delivery</h1>
        </div>
    </>
  )
}

export default Delivery