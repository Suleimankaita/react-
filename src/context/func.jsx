const show1=()=>{
    let char = 0;
      const txt=useMemo=()=>{
        let all = find.body1;
        if (char<=all.length ){
            setview(all.slice(0,char))
            char++   
        }
        setTimeout(txt,1)
      }
      setTimeout(()=>{
        if(find.body1.length < find.body2.length  ||find.body1.length < find.body3.length||find.body3.length < find.body2.length  ||find.body3.length < find.body1.length){
          setTimeout(()=>{
            txt()
    
          },500)
        }else{
          setTimeout(()=>{
            txt()
    
          },1)
        }
      },500)

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
                       
        <table>
          <tbody>
          <tr>
            <td>weight</td>
            
            <td>{find.weight3}</td>

            </tr>
          
          <tr>
            <td>height</td>
            
            <td>{find.height1}</td>

            </tr>
          
          <tr>
            <td>quality</td>
            
            <td><span style={{whiteSpace:"nowrap"}}>high quality</span></td>

            </tr>
          
            </tbody>
        </table>

     </div>
    )
    setall2(
      <>
                <button>add to cart</button>
      
      </>
    )
    setall2(
      <>
                <button onClick={()=>add({name:find.name,quantity:1,price:find.amount})}>add to cart</button>
      
      </>)
   
    }
    const show3=()=>{
      let char = 0;
      const txt=useMemo=()=>{
        let all = find.body3
        if (char<=all.length ){

            setview(all.slice(0,char))
            char++   
        }
        setTimeout(txt,1)

    
      }  
          if(find.body3.length < find.body2.length  ||find.body3.length < find.body1.length||find.body1.length < find.body3.length  ||find.body1.length < find.body2.length){
            setTimeout(()=>{
          txt()
  
        },1000)
      }else{
        setTimeout(()=>{
          txt()
  
        },1)
      }

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
                       
        <table>
          <tbody>
          <tr>
            <td>weight</td>
            
            <td>{find.weight3}</td>
            </tr>
          
          <tr>
            <td>height</td>
            
            <td>{find.height3}</td>
            </tr>
          
          <tr>
            <td>quality</td>
            
            <td><span style={{whiteSpace:"nowrap"}}>high quality</span></td>

            </tr>
         
            </tbody>
        </table>

     </div>
    )
    const my={name:arr.name3,quantity:arr.quantity,price:arr.amount}
    setall2(

      <>
          
               <button onClick={()=>add(my)}>add to cart</button>
               

      </>)
    }

