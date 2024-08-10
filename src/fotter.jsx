import React from 'react'
import { FaHome,FaShoppingCart,FaHistory,FaCheck } from 'react-icons/fa'

import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
const fotter = () => {
  return (
    <footer className='fotter'>
        <ul className='flx'>
   
    <NavLink to="/Track_order">
    <li className='li'>
      <div className="fl"> 
        <FaShoppingCart className=' svg '/>
        order
        </div>
         </li>
         </NavLink>
    
       
    <NavLink to="/History">
    <li className='li'>
      <div className="fl"> 
        <FaHistory className='svg'/>
        History
        </div>
         </li>
         </NavLink>

         <NavLink to="/">
    <li className='li'>
      <div className="fl"> 
        <FaHome className='svg'/>
        Home 
        </div>
         </li>
         </NavLink>
    
         
    <NavLink to="/Delivery">
    <li className='li'>
      <div className="fl"> 
        <FaCheck className='svg'/>
        Delivery
        </div>
         </li>
         </NavLink>
    <NavLink to="/setting">
    <li className='li'>
      <div className="fl"> 
        <FaCheck className='svg'/>
        Setting
        </div>
         </li>
         </NavLink>

    </ul>
  </footer >
  )
}

export default fotter