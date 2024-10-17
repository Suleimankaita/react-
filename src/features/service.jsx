// import React from 'react'
// import { useState as state, useEffect as eff,useRef as ref } from 'react'
// import Services1 from './svs/services1'
// const service = () => {

//   const [index,setindex]=state(0)
  
//   let arr=[<Services1 index={index}/>,"suleiman"]

// eff(()=>{
//   let interval=setInterval(()=>{
//     setindex((ma)=> (ma+1)%arr.length)
//   },200000)
//   return ()=> clearInterval(interval)
// },[])


  



//   const next =()=>{
//     setindex((ma)=> (ma+1)%arr.length)
//   } 

//   const prev =()=>{
//     setindex((ma)=> (ma-1 +arr.length) %arr.length)
//   } 


//  const b=(index)=>{
//   setindex(index)
//  }

//   return (
//     <>
//     <div className="carousel2">
//       <div className="carousel-inner2" style={{ transform: `translateX(-${index * 100}%)` }}>
//         {arr.map((src, index) => (
//           <div className="carousel-item2" key={index}>
//             <div>
//               {src}
//             </div>
//             {/* <img src={src} alt="" width={"100%"} height={"100%"} /> */}
//           </div>
//         ))}
//       </div>
//       <div className="carousel-controls">
//         <button className="carousel-control prev" onClick={prev}>&#10094;</button>
//         <button className="carousel-control next" onClick={next}>&#10095;</button>
//       </div>
//       <div className="carousel-indicators"> 
//          {arr.map((_, indexs) => (
//           <button
//             key={indexs}
//             className={indexs === index ? 'active' : null}
//             onClick={() => setindex(index)}
//           ></button>
//         ))} 
//        </div>
//     </div>
//     </>
//   )
// }

// export default service
