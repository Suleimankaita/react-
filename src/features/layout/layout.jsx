import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../nav'
import {Dataprovider} from '../../context/Datacontext';
import Mobilefotter from "../fotter"
const layout = () => {
  return (
    <Dataprovider>
        <article className='con1' >

    <header className='header'>
    <Nav/>    
    </header>

    <Outlet/>

    
</article>
      <Mobilefotter/>

    </Dataprovider>
  )
}

export default layout
