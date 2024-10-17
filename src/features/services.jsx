import React from 'react'
import { useContext as context } from 'react'
import Datacontext from '../context/Datacontext'
const services = ({title}) => {
    const {services,setservices,serv}= context(Datacontext)
  return (
    <div className='service'>

          <button 
          style={{border:"none",borderRadius:"10px"}}
          className={
            services===title ?"add":null} onClick={()=> serv(title)}>{title}
            </button>

      {/* {services.map((s,_)=>(
        // <button key={_} className={s[0]? "add":null}>{s}</button>
      ))} */}
    </div>
  )
}

export default services
