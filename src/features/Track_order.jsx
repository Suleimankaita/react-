import React from 'react'
import { useContext as context } from 'react'
import Datacontext from '../context/Datacontext'
import { FaTrashCan} from 'react-icons/fa6'
import Header from './header'

const Track_order = () => {

  const {display,
    cart,removeFromCart,inc,total,del} = context(Datacontext)

  return (<>
      <Header cart={cart.length}/> 
  
    <article className='art-2'>
    <main className='Track_order'>

   <p style={{transform:"translateY(20px)",fontSize:"20px",}}>&#8358; <b>{total}  </b></p>
        <div className="cover-2">
            <>
        {cart.map((item) => (
            <div className='store2' key={item.name}>
              <div className="el">
               <img className='cart_img' src={item.img} alt={item.name} width={"55%"} height={"55%"}/>
                <span className='spc' style={{transform:"translate(45px,49px)",textAlign:"center",whiteSpace:"nowrap",textAlign:"center",fontSize:"19px"}}>{item.name}</span>
             </div>
              <div className="btn-pt se" style={{margin:"50px 5px 0px 5px"}}>
            <button className='bt' onClick={()=>removeFromCart(item.name)} disabled={item.quantity===0 }>-</button>
           <span style={{marginLeft:"5px",marginRight:"5px",fontSize:"19px",textAlign:"center",transform:"translateY(5px)"}}>  {item.quantity}</span>
        
        <button className='bt' onClick={()=>inc(item.name)}  >+</button>
        <button  onClick={()=>del(item.name)} className='trash bt ns'><FaTrashCan role='button'
        tabIndex='0'
        /></button>
         
      </div>
      </div>
          ))}
          
        </>
        </div>

        {!cart.length&&
        <>

{/*         
        <div style={{
          height:"90vh",
          display:"flex",alignItems:"start",justifyContent:"center"}}>
          <p style={{transform:"translateY(-500px)"}}>your cart is empty</p>
          </div> */}
        </>
        }
        
            <div className="cash2">
               <div className="delivery "> 
                  <button  className='deli' style={{backgroundColor:"rgb(12, 158, 231)"}}>cash and delivery</button>
                 <button className='deli' style={{backgroundColor:"rgb(41, 182, 95)"}}>online payment</button>
             </div>
                <div className="absolute">           
                 {display}
                 </div>
             </div>

      </main>
      </article>
      </>
  
  )
}

export default Track_order