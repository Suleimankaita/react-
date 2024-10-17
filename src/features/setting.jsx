import React from 'react'
import Header from "./header"
import Datacontext from '../context/Datacontext'
import { FaUser } from 'react-icons/fa'
import { useContext as context } from 'react'
import { Link } from 'react-router-dom'
const setting = () => {
  const {cart} =context(Datacontext)

  return (
      <>
      <div style={{height:"100px"}}>

            <Header cart={cart.length}/>
      </div>

    <div>
      
      
              {/* <div className="hsit">
                <h1>on progress.......</h1>
              </div> */}

                  <div className="set-con">

                <div className="set1">
                  <FaUser className='user-1'/>
                  <h3 style={{margin:"20px"}}>profile</h3>
                </div>
                <div className="set1">
                  <FaUser className='user-1'/>
                  <h3 style={{margin:"20px"}}>privacy</h3>
                </div>
                <div className="set1">
                  <FaUser className='user-1'/>
                  <h3 style={{margin:"20px"}}>notications</h3>
                </div>
                <div className="set1">
                  <FaUser className='user-1'/>
                  <h3 style={{margin:"20px"}}>profile</h3>
                </div>
                <div className="set1">
                  <FaUser className='user-1'/>
                  <h3 style={{margin:"20px"}}>profile</h3>
                </div>
                <div className="set1">
                  <FaUser className='user-1'/>
                  <h3 style={{margin:"20px"}}>profile</h3>
                </div>
          </div>
          </div>

          </>    
  )
}

export default setting