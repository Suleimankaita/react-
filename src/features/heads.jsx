import React from 'react'
import { useContext as context } from 'react';
import Datacontext from '../context/Datacontext';
import { useParams as param } from 'react-router-dom'
const heads = () => {
    const {id}= param();
    const {product1}= context(Datacontext);

    const  find=product1.find((product)=> product.id=== parseInt(id))
    console.log(find)
  return (
    <div>
    <h1 style={{textAlign:"center"}}>{find.id}</h1>

    </div>
  )
}

export default heads
