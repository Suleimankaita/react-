import React from 'react'
import Slide from "./slid"
import Header from '../context/headers'
import Datacontext from '../context/Datacontext'
import { useContext as context } from 'react'
import Foter from './layout/foter'
import { FaTrashCan,FaTractor,FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Head from './head'
import Section1 from './section1'
import Services from './services'
import services from './services'
import Component from './component'
const home = () => {
  
  const {post,disp,setchange,change,Cash,display,all2,shw,product1,dis
    ,setall,all,setall2,pt2,setpt2,vew,setvews,vews,arr,setarr,cart,add,del,
    setCart,removeFromCart,inc,total,loading,err,hides} = context(Datacontext)

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
      <header className='header sp' style={{width:"100%",position:"absolute",
        maxHeight:"85px",
        transform:"translateY(-83px)"}}>      
            <Header />
            </header>
            </div>

    <main className='home ho'>
      <section className="section-1">

     <div className="searchresult"> 
      {disp}
      </div>

      <main className='hero_section'  >
     <Section1/>
    <div className="slidess">
       <Slide/>
       </div>
       </main>    
       <div className='services' >
        <h3 style={{textAlign:"center",position:"relative",right:"0px",}}>Cylinders</h3>
       </div>
       <div className="product" >
      {post.length?(
        <>
    {post.map(post=> (
      <div className='inner-pr' key={post.id}>
        <Link to={`/item/${post.id}`}>
        <div className='pro'>
          <div className="lop">
          <img className='img' style={{borderRadius:"5px",marginBottom:"10px"}} src={post.img} alt="" width={"280px"} height={"150px"} />
        </div>
        <p style={{fontSize:"21px",margin:"5px"}}>{post.name}</p>
        <p style={{fontSize:"19px",margin:"5px"}}>{post.title}</p>
        <p style={{fontSize:"20px",margin:"5px"}}> &#8358;{post.amount}</p>
        </div>
        </Link>

      </div>
    ))}    
      
        </>
         
      ):(
        <p style={{textAlign:"center"}}>no product display</p>
      )}          
        </div>
      <div className="alls" style={{display:"flex",backgroundColor:"white",justifyContent:"center"}}>
         <Services title="services" />
         <Services title="gas" />
         <Services  title="refil"/>
         </div>
         {/* <Services /> */}


        <Component/>



         <aside className='aside' ref={shw}>
         <div style={{display:"flex",width:"100%",justifyContent:"flex-end"}}>
   <div className="x" style={{
   left:"546px",borderRadius:"50%",
   height:"30px",
   width:"30px",
   display:"flex",
   justifyContent:"center",
   alignItems:"center",
}}>
   <FaX onClick={hides}/>
   </div>
   </div>
   <p>&#8358;{total}</p>
        <div className="cover">
            <>
        {cart.map((item) => (
            <div className='store' key={item.name}>
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
        </div>

        {!cart.length&&
        <>

        
        <div style={{
          height:"90vh",
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
    

      <Foter/>
      </main>
</>
</>
}
</>


  )
}

export default home