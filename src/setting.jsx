import React from 'react'
import Header from "./header"
import Datacontext from './context/Datacontext'
import { useContext as context } from 'react'
const setting = () => {
  const {cart} =context(Datacontext)

  return (
      
    <div>
            <Header cart={cart.length}/> 
      
      
              <div className="hsit">
                <h1>on progress.......</h1>
              </div>
          </div>

            
  )
}

export default setting