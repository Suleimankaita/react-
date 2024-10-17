import React from 'react'
import { useContext as context } from 'react'
import { FaShoppingCart } from 'react-icons/fa' 
import Datacontext from '../context/Datacontext'
import { Link } from 'react-router-dom'
// import { add } from 'date-fns'
const head = () => {
    
    const {product1,add2}=context(Datacontext)

    return (
    <>
    
    {/* <div className="head_bunner" style={{marginBottom:"90px"}}>
    <h1>heads</h1>

  </div> */}

       <div className="product2"  >


  {
    product1.map(product=>(
        <div className='inner-pr' key={product.id}>
        {/* <Link to={`/heads/${product.id}`}> */}
        <div className='pro2'>
          <div className="lop">
          <img className='img' style={{borderRadius:"5px",marginBottom:"10px"}} src={product.img} alt="" width={"100%"} height={"100px"} />
        </div>
        <p style={{fontSize:"21px",margin:"5px"}}>{product.name}</p>
        <p style={{fontSize:"20px",margin:"5px"}}> &#8358;{product.amount}</p>
        <div style={{display:"flex",justifyContent:"flex-end",width:"100%"}}>
        

        
        <button className='add-basket' onClick={()=>add2(product)}><FaShoppingCart className='svg'  width={"100%"}
        /></button>
        </div>
        </div>
        {/* </Link> */}

      </div>
    ))
  }
      </div>

  </>

  )
}

export default head