// import { createContext, useState,useEffect, Children } from "react";
// import resize from "../hooks/resize"
// import {format} from "date-fns"
// import api from "../api/axios"
// import React from 'react'
// import { useState as use,useEffect as eff } from 'react'
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// const Datacontext = createContext({}) 
 
// export const Dataprovider=({Children})=>{
//   const {width}=resize()
//   const history=useHistory()
//   const [searchresult,setsearchresult]=use([])
//   const [posts,setpost]=use([])
//   const [postinput,setpostinput]= use("")
//   const [editinput,setEditinput]= use("")
//   const [editbody,seteditbody]= use("")
//   const [search,setsearch]=use('')
//   const [postbody,setpostbody]= use("")





//   eff(()=>{
//     const fet=async()=>{

//       try{
//         const res=await api.get("/post")
//         console.log(res.data)
//         setpost(res.data)
//       }catch(err){
//         if(err){
//           console.log(err.res.data)
//           console.log(err.res.status)
//           console.log(err.res.headers)
//         }else{
//           console.log(err.message)
//         }

//       }finally{

//       }
//     }
//     fet()
//   },[])


//   //   eff(()=>{
//   //   const all=posts.filter(posts=> ((posts.name).toLowerCase()).includes(search.toLowerCase) )
//   //   setsearchresult(all.reverse())
//   // },[search])

  
//   const del=async(id)=>{
//     try{
//       await api.delete(`/post/${id}`)
//       const list =posts.filter(post=> post.id!==id)
//       setpost(list)
//       history.push("/")
//     }catch(err){
//       console.log(err.message)
//     }
    
//   }
//   const submit =async(e)=>{
       
//     e.preventDefault()
//     const id= posts.length ? posts[posts.length -1].id+1:1;
//     const datetime=format(new Date(),"MMMM dd,yyyy pp")
//     const all={id,name:postinput,body:postbody,datetime }
//     const add=await api.post("/post" ,all)

//     try{
//       const list=[...posts ,add.data]
//       setpost(list)
//       setpostbody("")
//       setpostinput("")
//       history.push("/")
//     }
//     catch(err){
//       console.log(err.message)
//     }
    
//   }
//     const editt=async(id)=>{
//         const datetime=format(new Date(),"MMMM dd,yyyy pp")
//         const all={id,name:editinput,body:editbody,datetime }
//         try{
//           const list= await api.patch(`/post/${id}`,all)
//           setpost(posts.map(post=>post.id===id ? {...list.data}:post ))
//           history.push("/")

//         }
//       catch(err){
//         console.log(err.message)
        
//       }}

//   return(
//     <Datacontext.Provider value={{
//       width, postinput, postbody,setpostinput, setpostbody,posts,del,submit, seteditbody, editbody,setEditinput,editt,search,setsearch
//         ,searchresult
//             }}>
//       {Children}
//       </Datacontext.Provider>
//   )
// }


// export default Datacontext