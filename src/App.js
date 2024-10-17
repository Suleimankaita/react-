import React from 'react'
import Home from "./features/home";
import Nav from './features/nav';
import Header from './context/headers';
import Footer from "./features/fotter"
import Track_order from './features/Track_order';
import {Route, Routes} from "react-router-dom"
import Delivery from './features/Delivery';
import Item from './features/item';
import Search from './features/search';
import History from './features/History';
import Setting from './features/setting';
 import {Dataprovider} from './context/Datacontext';
 import Layout from './features/layout/layout';
 import Heads from './features/heads';
 

const App = () => {
  
  
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>     
            <Route  path='/' index element={<Home/>}/> 
            <Route  path="/Track_order" element={<Track_order/>}/>
            <Route  path="/History" element={<History/>}/>
            <Route  path="/item/" >
            <Route  path=":id" element={<Item/>}/>
            </Route>
            <Route  path="/Delivery" element={<Delivery/>}/>
            <Route  path="/heads/">
            <Route path =":id"  element={<Heads/>} />
            </Route>
            <Route  path="/setting" element={<Setting/>}/>
        </Route>  
    </Routes>
  )
}

export default App