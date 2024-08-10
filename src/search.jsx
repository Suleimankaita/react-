import React from 'react'
import { useContext as context, useEffect as eff } from 'react'
import Datacontext from './context/Datacontext'
import { FaSearch} from 'react-icons/fa'

const search = () => {
    const {search,setsearch,show,searchresult }=context(Datacontext)
    

    eff(()=>{
        const al=()=>{
            
            if(search  ===searchresult ){ return}
            else{
        if(search){
        show()
      } }

      }
      al()

    
    },[search,searchresult])
    
  
  return (
    <div className="input">
            <form className='form' action="" onSubmit={(e=>e.preventDefault())}>

                <div className="search">
                    <FaSearch className='sear'/>
                    <input type="text"
                    style={{zIndex:"100000",padding:"10px"}}
                    placeholder='Search'
                    value={search}
                    onChange={(e)=>{
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