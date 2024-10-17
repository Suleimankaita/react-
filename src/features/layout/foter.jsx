import React from 'react'
import { FaTwitter,FaWhatsapp,FaInstagram,FaFacebook } from 'react-icons/fa6'
const foter = () => {
  return (
    <>
     <footer className='fotters'>
       <main className='foter_comp'>
    <div className="f1" style={{display:"flex",flexFlow:'column',alignItems:""}}>
    <h1 style={{fontSize:20,margin:10}}>Customer Services</h1>
    <p style={{margin:10,fontSize:18}}>help center</p>
    <p style={{margin:10,fontSize:18}}>Transaction center</p>
    
        <h1 style={{fontSize:20,marginTop:10,textAlign:"center"}}>help</h1>
    <div className='pa'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit id a.</p>
    </div>
    
    </div>
    <div className="f2" style={{display:"flex",flexFlow:'column',alignItems:"center"}}>
    <h1 style={{fontSize:18,margin:10}}>Address</h1>
    <address>
    <p>sabon titi kwado near dadin kowa store</p>
    
    </address>
    </div>
    <div className="f3" style={{display:"flex",flexFlow:'column',alignItems:"center"}}>
    <h1 style={{fontSize:18,}}>stay connect with us</h1>
    <div className="charts">
      <FaFacebook className='svq'  style={{margin:10}}  color='#1c9fe0'/>
      <FaInstagram className='svq'  style={{margin:10}} color=' #e85656'/>
      <FaTwitter className='svq'  style={{margin:10}} color='#1c9fe0'/>
      <FaWhatsapp className='svq'  style={{margin:10}} color=' rgb(15, 140, 15)'/>
    </div>
    </div>

       </main>
       <br />
       <br />
       <p className='pi' style={{textAlign:"center"}}>&copy; Gas and Go 2024</p>
     </footer>
    </>
  )
}

export default foter
