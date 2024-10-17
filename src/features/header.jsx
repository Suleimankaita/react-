import { Link } from 'react-router-dom'
import React from 'react'
import { FaShoppingCart,FaMapMarkerAlt} from 'react-icons/fa'
import { useRef } from 'react'
import { useContext as context } from 'react'
import Datacontext from '../context/Datacontext'

const header = ( {cart}) => {
    
  const {shows}=context(Datacontext)
  
  return (

    <div className="hp">
      <header className='header sp' style={{width:"100%",position:"absolute",
        maxHeight:"85px",
        transform:"translateY(-83px)"}}>      

<section className='head '>

<div className="logo">
    logo
</div>
{/* <Search/> */}
<h5 className='welcome'>welcome to Gas and / <br />go sing in </h5>
<div className="delivery">
<FaMapMarkerAlt className='svg sv'/>
<h3> Delivery</h3>

</div>
<span style={{display:"flex"}}>
<FaShoppingCart onClick={(()=>shows())} className=' svg sv '/>
{cart}</span>

        
</section>


            {/* <Header /> */}
            </header>
            </div>


  )
}


 


export default header