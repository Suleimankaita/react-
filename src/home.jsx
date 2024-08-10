import React from 'react'
import Slide from "./slid"
import Header from './context/header'
import Datacontext from './context/Datacontext'
import { useContext as context } from 'react'
import Search from './search'
import { tr } from './header'
import Nav from './nav'
import { FaTrashCan } from 'react-icons/fa6'

import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const home = () => {
  
  const {post,disp,setchange,change,Cash,display,all2,shw
    ,setall,all,setall2,pt2,setpt2,vew,setvews,vews,arr,setarr,cart,add,del,
    setCart,removeFromCart,inc,total,loading,err} = context(Datacontext)

  return (
<>
    {loading && 
    <div className="loads"style={{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center" }}>
    <div className='load' ></div>
    </div>
    }

    {!loading && !err &&
    <> 
    
    
<>
<div className="hp">
      <header className='header sp' style={{width:"100%",position:"absolute",transform:"translateY(-80px)"}}>      
            <Header />
            </header>
            </div>

    <main className='home ho'>
      <section className="section-1">

     <div className="searchresult"> 
      {disp}
      </div>

  <main className='hero_section'  >
      <div className="first_hero">
        
        <h2 className='hero_h1' style={{textAlign:"start", marginLeft:"20px", margin:"20px 30px ",position:"relative",top:"30px" }
      }>
        Convenient Gas and Cylinder  Services <br /> at Your Fingertips
        </h2> 
    <p className='hero_p' style={{fontSize:"17px"}}>Discover the easiest way to get your gas needs met with Gas and go Our seamless online platform lets you order gas and cylinder services from the comfort of your home. Enjoy swift delivery, competitive prices, and exceptional customer service. Trust us to keep you powered up anytime anywhere</p>
    <div className="hero_btn">
      <button className='hero_btns'>Shop now</button>
      <button className='hero_btns'>learn more</button>
    </div>
    </div>
    <div className="slidess">
       <Slide/>
       </div>
       </main>
       <div className='services' >
        <h3 style={{textAlign:"center",position:"relative",right:"0px",}}>Services</h3>
       </div>
       <div className="product" >
        
      {post.length?(
        <>

    {post.map(post=> (

      
      <div className='inner-pr' key={post.id}>

        <Link to={`/item/${post.id}`}>
        <div className='pro'>
          
          <div className="lop">
          <img className='img' style={{borderRadius:"5px",marginBottom:"10px"}} src={post.img} alt="" width={"180px"} height={"150px"} />
        </div>
        <p style={{fontSize:"18px",margin:"5px"}}>{post.name}</p>
        <p style={{fontSize:"17px",margin:"5px"}}>{post.title}</p>
        <p style={{fontSize:"16px",margin:"5px"}}> &#8358;{post.amount}</p>
        </div>
        </Link>

      </div>
    ))}    
        </>
      ):(
        <p style={{textAlign:"center"}}>no product display</p>
      )}          

          

        </div>
        <aside className='aside' ref={shw}>
   <p>&#8358;{total}</p>
        <div className="cover">
          {cart.length &&
            <>
        {cart.map((item)=> (
            <div className='store'key={item.name} >
              <div className="el">
             <img className='cart_img' src={item.img} alt="" width={"50px"} height={"50px"}/>
            <span style={{transform:"translate(15px,49px)",whiteSpace:"nowrap"}}>{item.name}</span>
             </div>
              <div className="btn-pt">
            <button onClick={()=>removeFromCart(item.name)} disabled={item.quantity===0 }>-</button>
           <span style={{marginLeft:"5px",marginRight:"5px",fontSize:"17px",textAlign:"center",transform:"translateY(5px)"}}>  {item.quantity}</span>
        
        <button onClick={()=>inc(item.name)}  >+</button>
        <button onClick={()=>del(item.name)} className='trash'><FaTrashCan role='button'
        tabIndex='0'
        /></button>
         
      </div>
            </div>
          ))}
          
        </>
        }
        </div>

        {!cart.length&&
        <>

        
        <div style={{
          height:"100vh",
          color:"wheat",
          display:"flex",alignItems:"center",justifyContent:"center"}}>
          <p style={{transform:"translateY(-50px)"}}>your cart is empty</p>
          </div>
        </>
        }
        
            <div className="cash">
               <div className="delivery "> 
                  <button  className='deli' style={{backgroundColor:"rgb(12, 158, 231)"}}>cash and delivery</button>
                 <button className='deli' style={{backgroundColor:"rgb(41, 182, 95)"}}>online payment</button>
             </div>
                <div className="absolute">           
                 {display}
                 </div>
             </div>
         </aside>  

        </section>
      </main>
</>
</>
}
</>


  )
}

export default home