import React from 'react'
import { FaHome,FaShoppingCart,FaHistory,FaTimes,FaBars,FaCheck } from 'react-icons/fa'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
 import { useRef as Ref, useEffect as ef} from 'react' 
 

const nav = () => {


  return (
    <>
    
    <nav className='nav'>
      <div className="close">
        <button className='btn' >
        </button>
      </div>
      <ul className='ul'>
      
      <NavLink to="/" activeClassName="actives">
      <li className='li'>
        <div className="fl"> 
          <FaHome className='svg'/>
          <span className='spn'> Home</span>  
          </div>
           </li>
           </NavLink>
      
      <NavLink to="/Track_order">
      <li className='li'>
        <div className="fl"> 
          <FaShoppingCart className=' svg '/>
          <span className='spn'>Track_order</span>
          </div>
           </li>
           </NavLink>
      
      <NavLink to="/History">
      <li className='li'>
        <div className="fl"> 
          <FaHistory className='svg'/>
          <span className='spn'> History </span>
          </div>
           </li>
           </NavLink>
           
      <NavLink to="/Delivery">
      <li className='li'>
        <div className="fl"> 
          <FaCheck className='svg'/>
          <span className='spn'> Delivery </span>
          </div>
           </li>
           </NavLink>

      </ul>
    </nav>
    <button  className='btn'>
    </button>
    </>

  )
}

export default nav