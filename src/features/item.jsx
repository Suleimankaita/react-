import React, { useCallback as call, useMemo } from 'react'
import { useParams as param } from 'react-router-dom'
import Foter from './layout/foter'
import { useContext as context,useEffect as effect ,useState as state} from 'react'
import Table from "./table2"
import { FaTrashCan ,FaStar,FaX } from 'react-icons/fa6'
import  Header from "./header"
import Datacontext from '../context/Datacontext'
import Table1 from './table1'
import Table2 from './table2'
import Table3 from './table3'
import Sec from './sec'
import Head from './head'
const item = () => {


    const {post,setchange,change,Cash,display,all2,shw
      ,setall,all,setall2,pt2,setpt2,vew,setvews,vews,arr,setarr,cart,add,
      setCart,removeFromCart,inc,total,del,loading,hides} = context(Datacontext)
    const {id}=param()
    const find =post.find(post=> post.id === parseInt(id))
    const [view,setview]=state('')

  
    effect(()=>{
      // let char = 0;
      //   const txt=useMemo=()=>{
      //     let all = find.body1;
      //     if (char<=all.length ){
      //         setview(all.slice(0,char))
      //         char++   
      //     }
      //   setTimeout(txt,5)

    
      // }
      // txt()
      setview(find.body1)

      setpt2( 
        <>
        <h1 style={{fontSize:"25px"}}>{find.name}</h1>
          <h1 style={{fontSize:"20px",}} className='amount'>&#8358;{find.amount}</h1>
          </>
          
          )

      setall(
        <div className="lists">
                       
       <Table1 find={find} />

     </div>
    )
  
  
    setall2(
      <>
                <button onClick={()=>add({name:find.name,quantity:1,price:find.amount,img:find.img})}>add to cart</button>
      
      </>)
    setchange(
      
    <div className="view">
    <img src={find.img} alt="" width={"400px"} height={"400px"}/>

    </div>
    )

    
    },[])
    
   
   

    const s=call(()=>{
      let char = 0;
//       const txt=useMemo=()=>{
//         let all = find.body1;
//         if (char<=all.length ){
//             setview(all.slice(0,char))
//             char++   
//         }
//         setTimeout(txt,1)
//       }
//       setTimeout(()=>{
//         if(find.body1.length < find.body2.length  ||find.body1.length < find.body3.length||find.body3.length < find.body2.length  ||find.body3.length < find.body1.length){
//           setTimeout(()=>{
//             txt()
//           }
// ,1000)
//         }else{
//           setTimeout(()=>{
//             txt()
    
//           },1)
//         }
//       },500)
          setchange(
        <div className="view">
            <img src={find.img} alt="" width={"400px"} height={"400px"}/>   
            </div>
        
          )
          setpt2( 
            <>
            <h1 style={{fontSize:"25px"}}>{find.name}</h1>
              <h1 style={{fontSize:"20px",}} className='amount'>&#8358;{find.amount}</h1>
              </>
              
              )
          
          setall(
            <div className="lists">

             <Table1 find={find}/>
    
          </div>
        )
      
        setall2(
          <>
                    <button onClick={()=>add({name:find.name,quantity:1,price:find.amount,img:find.img1})}>add to cart</button>
          
          </>)
       
    },[arr,view])

    
    const show2=call(()=>{
      // let char = 0;
      // const txt=useMemo=()=>{
      //   let all = find.body2;
      //   if (char<=all.length ){
      //       setview(all.slice(0,char))
      //       char++   
      //   }
      //   setTimeout(txt,1)
      // }
      // setTimeout(()=>{
      //   if(find.body2.length < find.body1.length  ||find.body2.length < find.body3.length||find.body3.length < find.body2.length  ||find.body3.length < find.body1.length){
      //     setTimeout(()=>{
      //       txt()
    
      //     },500)
      //   }else{
      //     setTimeout(()=>{
      //       txt()
    
      //     },1)
      //   }
      // },500)
      setview(find.body2)

      setpt2( 
        <>
        <h1 style={{fontSize:"25px"}}>{find.name2}</h1>
          <h1 style={{fontSize:"20px",}} className='amount'>&#8358;{find.amount2}</h1>
          </>
          
          )
      setchange(
        <div className="view">
        <img src={find.img2} alt="" width={"400px"} height={"400px"}/>
        </div>
      )

      setall(
        <div className="lists">
            <Table2 find={find} />
          </div>
              )
              setall2(
                <>
                   <button onClick={()=>add({name:find.name2,quantity:1,price:find.amount2,img:find.img2})}>add to cart</button>        
                </>)

    },[arr,setarr])
    

        const show3=()=>{
          let char = 0;
          // const txt=useMemo=()=>{
          //   let all = find.body3
          //   if (char<=all.length ){
    
          //       setview(all.slice(0,char))
          //       char++   
          //   }
          //   setTimeout(txt,1)
    
        
          // }  
          //     if(find.body3.length < find.body2.length  ||find.body3.length < find.body1.length||find.body1.length < find.body3.length  ||find.body1.length < find.body2.length){
          //       setTimeout(()=>{
          //     txt()
      
          //   },1000)
          // }else{
          //   setTimeout(()=>{
          //     txt()
      
          //   },1)
          // }
      setview(find.body3)
          setchange( 
            <>
            <div className="view">
            <img src={find.img3} alt="" width={"400px"} height={"400px"}/>
            </div>
             
          </>
          )
    
    
    
          setpt2( 
          <>
          <h1 style={{fontSize:"25px"}}>{find.name3}</h1>
            <h1 style={{fontSize:"20px",}} className='amount'>&#8358;{find.amount3}</h1>
            </>
            
            )
           
    
          setall(
          <div className="lists">                
            <Table3 find={find}/>
         </div>
        )
        const my={name:arr.name3,quantity:arr.quantity,price:arr.amount}
        setall2(
          <>
              <button onClick={()=>add({name:find.name3,quantity:1,price:find.amount,img:find.img3})}>add to cart</button>
                              
          </>)
        }
    
        
         
    
        
      
        
        // const del = (productId) => {
        //   setCart(prevCart => {
        //     const product = prevCart.find(item => item.name === productId);
        //     if (product.quantity ) {
        //       return prevCart.filter(item => item.name !== productId);
        //     }
          
        //      else {
        //       return prevCart.map(item =>
        //         item.name === productId ? { ...item, quantity: item.quantity - 1 } : item
        //       );
        //     }
        //   });
        // };
        
    
          
  return (<>
  
 
      <Header cart={cart.length}/> 
    
    <section className='postpage'>
      <main className='posts'>
      {find &&<>

        <div className="pt1">  
        
        
         
       <Sec
        change={change}
        find={find}
        s={s}
        show2={show2}
        show3={show3}
       />
 
        </div>
        <div className="pt2">
         <h1 className='hpt'> {pt2}</h1>
        <div className="starts">
        <FaStar style={{transform:"translateY(-20px)"}}/>
        <FaStar style={{transform:"translateY(-20px)"}}/>
        <FaStar style={{transform:"translateY(-20px)"}}/>
        </div>
         <p className='views' style={{width:"100%" ,minHeight:"100px"}}> {view}</p>
      <br />
      <br />    
              <div className="addcart">
              {all2}
              {vew}
              </div>
              
        {vews}

        
          </div>
        <div className="pt3">

              <div className="lists">
               {   all}

             </div>
        </div>
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
         </>
}    
  {!find &&
    <p>no post display</p>
    }
</main>

          {/* <div className="item-2">
            <div className="inner-item">
              <div className="items_inner">

          </div>
          </div>
  
          </div> */}
<Head/>
<Foter/>
    </section>
      
    </>

  )
}

export default item