import React from 'react'
import img from "../../img/shower.jpeg"
import { useRef as ref ,useEffect as eff} from 'react'

const services1 = ({index}) => {

    const refs=ref()

    // eff(()=>{
        
    //     if(index===0){
    //         refs.current.classList.add("ko")
    //     console.log("sa")  
    //     }
    // },[index])

    return (
      <>
      
      <div className="service2">
                <div className="pro2">
                 <div className="lop">
                  <img className='img' style={{borderRadius:"5px",marginBottom:"10px"}} src={img} alt="" width={"100%"} height={"100px"} />
                </div>
                  <p style={{fontSize:"21px",margin:"5px"}}>name</p>
                  <p style={{fontSize:"20px",margin:"5px"}}> &#8358;amount</p>
                </div>
             
              </div>
               
      </>
    // <div  style={{backgroundImage:`url(${img})`,width:"100%", height:"100vh",backgroundPosition:"center",backgroundSize:"cover",padding:"10px"}} >

    //     <div  ref={refs}>
    //   <h1 style={{textAlign:"center"}}> services</h1>
    // </div>
    // </div>
  )
}

export default services1
