import React from 'react'
import { useContext as context } from 'react'
import Datacontext from '../context/Datacontext'
const component = () => {
  
    const {dis}=context(Datacontext) 
    return (

    <div>
      {dis}
    </div>
  )
}

export default component
