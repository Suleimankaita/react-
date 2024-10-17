import React from 'react'
import { FaHome,FaShoppingCart,FaHistory,FaTimes,FaBars,FaCheck } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
 import { useRef as Ref, useEffect as ef} from 'react' 
 import { Dataprovider } from '../context/Datacontext'
 

const nav = () => {


  return (
    // <Dataprovider>
    <>
    
    <nav className='nav' style={{zIndex:"1000"}}>
      <div className="close">
        <button className='btn' >
        </button>
      </div>
      <ul className='ul'>
      
      <NavLink to="/">
      <li className='li'>
        <div className="fl"> 
          <FaHome className='svg'/>
          <span className='spn'> Home</span>  
          </div>
           </li>
           </NavLink>
      
      <NavLink to="Track_order">
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
      <NavLink to="/setting">
      <li className='li'>
        <div className="fl"> 
          <FaCheck className='svg'/>
          <span className='spn'> setting </span>
          </div>
           </li>
           </NavLink>

      </ul>
    </nav>
    <button  className='btn'>
    </button>
    </>
    // </Dataprovider>
  )
}

export default nav