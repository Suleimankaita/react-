import React from 'react'
import Home from "./home";
import Nav from './nav';
import Header from './context/header';
import Footer from "./fotter"
import Track_order from './Track_order';
import {Route, Switch} from "react-router-dom"
import Delivery from './Delivery';
import Item from './item';
import Search from './search'
import History from './History';
import Setting from './setting';
 import {Dataprovider} from './context/Datacontext';
 import Datacontext from './context/Datacontext';
 import { useContext } from 'react';
const App = () => {
  
  
  return (
    <article className='con1' >
  <Dataprovider>
      <>
      
       <header className='header'>
            <Nav/>    
            </header>
            <Switch>
           
            
            <Route exact  path="/">
              <Home/>
            </Route>
            <Route  path="/Track_order">
              <Track_order/>
            </Route>
            <Route  path="/History">
              <History/>
            </Route>
            <Route  path="/item/:id">
              <Item/>
            </Route>
            <Route  path="/Delivery">
              <Delivery/>
            </Route>
            <Route  path="/setting">
              <Setting/>
            </Route>
          
          
            </Switch>

      <Footer/>
  
      </>
      </Dataprovider>


    </article>
  )
}

export default App