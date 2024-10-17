import React from 'react'

const sec = ({find,show2,show3,s,change}) => {
  return (<>
  
    <div className="ite1">
         <div className='div' style={{zIndex:"100px"}}>{change}</div> 
         </div>
         <div className="choose">
    <h1 style={{textAlign:"center",transform:"translateX(-20px)"}}>choose your cylinder</h1>
    </div>
         <br /><br /><br />

         <div className="view2">
          <label htmlFor="in1" onClick={()=>s()} style=    {{marginRight:"40px"}}> 
           <img src={find.img} alt="" width={"100px"} height={"100px"}/>

         </label>
          <br />
          <label htmlFor="in2" onClick={()=>show2()} style={{marginRight:"40px"}}>
             <img src={find.img2} alt="" width={"100px"} height={"100px"}/>
          </label>
          <br />

          <label htmlFor="in3" onClick={()=>show3()} style={{marginRight:"40px"}}>
            <img src={find.img3} alt="" width={"100px"} height={"100px"}/>
          </label>
          </div>
          </>
  )
}

export default sec