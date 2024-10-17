import React from 'react'
import { useContext as context, useEffect as eff } from 'react'
import Datacontext from '../context/Datacontext'
import { FaSearch} from 'react-icons/fa'

const search = () => {
    const {setdisp,mm,search,setsearch,show,searchresult ,render }=context(Datacontext)

    eff(()=>{
        const al=()=>{
            
            // if(search  !==searchresult ){ return}
            if(search.length>0){
                
                mm()
  } 
            else if( search === ""){
                
          return setdisp(null)
                
          }
       

      }
        al()

    
    },[search,searchresult])
    
        eff(()=>{
             return()=> window.removeEventListener("load", mm())
             

        },[])

  return (
    <div className="input">
            <form className='form'  onSubmit={(e=>e.preventDefault())}>

                <div className="search">
                    <FaSearch className='sear'/>
                    <input type="text"
                    style={{zIndex:"100000",padding:"10px"}}
                    placeholder='Search'
                    value={search}
                    onInput={(e)=>{
                        setsearch(e.target.value)
                        
                    }
                }
                    className='inp'
                    required
                    
                />
                </div>

            </form>
            
        </div>
  )
}

export default search