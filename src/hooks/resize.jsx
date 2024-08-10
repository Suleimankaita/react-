import React from 'react'
import { useEffect as ef, useState as use } from 'react'


const resize = () => {

    const [widthsize,setwidthsize]=use({
        width:undefined,
        height:undefined,
    })

    ef(()=>{

        const size=()=>{

            setwidthsize({
                width:window.innerWidth,
                height:window.innerHeight
            })
        }
        window.addEventListener("resize",size)

        const clenup=()=>{
          window.removeEventListener("resize",size)
        
        }
        return clenup
    },[])
    return widthsize
  
}

export default resize