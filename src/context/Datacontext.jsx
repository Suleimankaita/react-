import { useState, useEffect, createContext ,useRef, useCallback} from "react";
import api from "../api/axios"
import bunner2 from "../img/bunner2.jpeg"
import bunner3 from "../img/bunner3.jpeg"
import bunner4 from "../img/bunner4.png"
import img1 from "../img/sl2.png"
import img2 from "../img/sl2 (2).png"
import img3 from "../img/sli3.png"
import img4 from "../img/sli4.png"
import img5 from "../img/sli1copy.png"
import head1 from "../img/buner.png"
import kg1 from '../img/2kgs-removebg-preview.png'
import kg2 from '../img/3kgs-removebg-preview.png'
import kg3 from '../img/14kg-removebg-preview.png'
import kg4 from '../img/19kg-removebg-preview.png'
import kg5 from '../img/50kg-removebg-preview.png'
import kg6 from  '../img/4kg.png'
import kg7 from "../img/1kg.png"
import kg12 from "../img/12kg.png"
import kg5s  from '../img/5kg.png'
import { Link } from "react-router-dom";
import { FaFacebook,FaWhatsapp,FaTwitter,FaInstagram } from 'react-icons/fa6'
import { set } from "date-fns";
import mini from "../img/shower.jpeg"
import regulator from "../img/regulator with pipe.jpg"
import lowpresure from "../img/low pr regulator.jpg"
import head2 from "../img/head1.webp"
import medium from "../img/medium bunner.jpeg"
import Service from "../features/service";

const Datacontext=createContext({});

export const Dataprovider=({children})=>{

    const [search,setsearch]=useState("")
    const [name,setname]=useState("")
    const [title,settitle]=useState("")
    const [price,setprice]=useState("")
    const [all,setall]=useState()
    const [all2,setall2]=useState()
    const [pt2,setpt2]=useState()
    const [loading,setloading]=useState(true)
    const [count,setcount]=useState(1)
    const [posts,setposts]=useState([])
    const [arr,setarr]=useState([])
    const [store,setstore]=useState(JSON.parse(localStorage.getItem("store"))||[])
    const [searchresult,setsearchresult]=useState([])
    const [disp,setdisp]=useState()
    const [vew,setvew]=useState()
    const [err,seterr]=useState(null)
    const [dis,setdis]=useState()
    const [vews,setvews]=useState([])
    const shw=useRef()
    const render=useRef()
    const [services,setservices]=useState("services")
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
      });
      useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
      }, [cart]);
      
      
      const [product1,setproduct1] = useState([
        {
         id:1,
         name:"bunner head",
         img:head1,
         title:"man",
         amount:1000,
          
        },
        {
         id:1,
         name:" head",
         img:mini,
         title:"man",
         amount:1000,
          
        },
        {
         id:2,
         name:"regulator with pipes",
         img:regulator,
         title:"man",
         amount:1000,
          
        },
        
        {
         id:3,
         name:"low pressure regulator",
         img:lowpresure,
         title:"man",
         amount:1000,
          
        },
        {
         id:4,
         name:"bunner",
         img:head2,
         title:"man",
         amount:1000,
          
        },
       
        // {
        //  id:5,
        //  name:"medium head",
        //  img:medium,
        //  title:"man",
        //  amount:1000,
          
        // },
      ]) 



    const [post,setpost]=useState([
        {
            id:0,
            img:img1,
            name:"12Kg cylinder",
            name2:"7Kg cylinder",
            name3:"9Kg cylinder",
            amount2:1500,
            amount3:17000,
            quantity:7,
            quantity2:7,
            quantity3:9,
            img2:img2,
            img3:img5,
            img4:img5,
            amount:1000,
            body1:"suleiman yusuf kaita Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et quisquam accusamus  recusandae! Architecto blanditiis numquam officia adipisci. Ex, vitae cumque mollitia dolores ad repellendus voluptatibus, laboriosam itaque recusandae! Architecto blanditiis numquam officia adipisci. Ex, pro provident?",
            body2:"yusuf kaita Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et quisquam accusamus temporibus vitae cumque mollitia dolores ad repellendus voluptatibus, laboriosam itaque recusandae! Architecto blanditiis numquam officia adipisci. Ex, provident?",
            body3:"sssuleiman yusuf kaita Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et quisquam accusamus temporibus vitae cumque mollitia dolores ad repellendus voluptatibus, laboriosam itaque recusandae! Architecto blanditiis numquam officia adipisci. Ex, provident?",

            head:{  

                    img:{
                        img:bunner2,
                        img:bunner3
                    }

                },          
        
            weight1:11,
            weight2:100,
            weight3:74,
            height1:30,
            height2:33,
            height3:23,
            quality:"high quality",
            presure:~12,
            title:"refill",
            quantity:3
        },
        {
            id:1,
            img:kg2,
            name:"2Kg cylinder",
            name2:"4Kg cylinder",
            name3:"19Kg cylinder",
            amount:10000,
            amount2:20000,
            amount3:17000,
            quantity:7,
            quantity2:7,
            quantity3:9,
            img2:kg3,
            img3:kg4,
            img4:img2,
            body1:"suleiman yusuf kaita Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et quisquam accusamus  recusandae! Architecto blanditiis numquam officia adipisci. Ex, provident?",
            body2:"yusuf kaita Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et quisquam accusamus temporibus vitae cumque mollitia dolores ad repellendus voluptatibus, laboriosam itaque recusandae! Architecto blanditiis numquam officia adipisci. Ex, provident?",
            body3:"sssuleiman yusuf kaita Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et quisquam accusamus temporibus vitae cumque mollitia dolores ad repellendus voluptatibus, laboriosam itaque recusandae! Architecto blanditiis numquam officia adipisci. Ex, provident?",

            head:{  

                img:{
                    img:bunner2,
                    img:bunner3
                }

            },          
            weight1:11,
            weight2:100,
            weight3:74,
            height1:30,
            height2:33,
            height3:23,
            quality:"high quality",
            presure:~12,
            title:"refill",
            quantity:3
        },
        
        {
          id:2,
          img:kg1,
          img2:kg7,
          img3:kg6,
          name:"3Kg cylinder",
            name2:"1Kg cylinder",
            name3:"4Kg cylinder",
            amount:10000,
            amount2:70000,
            amount3:17000,
            quantity:7,
            quantity2:7,
            quantity3:9,
            body1:"suleiman yusuf kaita Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et quisquam accusamus  recusandae! Architecto blanditiis numquam officia adipisci. Ex, provident?",
            body2:"yusuf kaita Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et quisquam accusamus temporibus vitae cumque mollitia dolores ad repellendus voluptatibus, laboriosam itaque recusandae! Architecto blanditiis numquam officia adipisci. Ex, provident?",
            body3:"sssuleiman yusuf kaita Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et quisquam accusamus temporibus vitae cumque mollitia dolores ad repellendus voluptatibus, laboriosam itaque recusandae! Architecto blanditiis numquam officia adipisci. Ex, provident?",

            head:{  

                img:{
                    img:bunner2,
                    img:bunner3
                }

            },          
            weight1:11,
            weight2:100,
            weight3:74,
            height1:30,
            height2:33,
            height3:23,
            quality:"high quality",
            presure:~12,
            title:"refill",
            quantity:3
        },

       
            {
              id:3,
              img:kg12,
              img2:img4,
              img3:kg5s,
                name:"6Kg cylinder",
                name2:"3Kg cylinder",
                name3:"5Kg cylinder",
                amount:10000,
                amount2:70000,
                amount3:17000,
                quantity:7,
                quantity2:7,
                quantity3:9,
                body1:"suleiman yusuf kaita Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et quisquam accusamus  recusandae! Architecto blanditiis numquam officia adipisci. Ex, provident?",
                body2:"yusuf kaita Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et quisquam accusamus temporibus vitae cumque mollitia dolores ad repellendus voluptatibus, laboriosam itaque recusandae! Architecto blanditiis numquam officia adipisci. Ex, provident?",
                body3:"sssuleiman yusuf kaita Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et quisquam accusamus temporibus vitae cumque mollitia dolores ad repellendus voluptatibus, laboriosam itaque recusandae! Architecto blanditiis numquam officia adipisci. Ex, provident?",
    
                head:{  
    
                    img:{
                        img:bunner2,
                        img:bunner3
                    }
    
                },          
                weight1:11,
                weight2:100,
                weight3:74,
                height1:30,
                height2:33,
                height3:23,
                quality:"high quality",
                presure:~12,
                title:"refill",
                quantity:3
            },
            {
              id:4,
              img:kg7,
              img2:kg1,
              img3:kg6,
              name:"1Kg cylinder",
                name2:"3Kg cylinder",
                name3:"4Kg cylinder",
                amount:10000,
                amount2:70000,
                amount3:17000,
                quantity:7,
                quantity2:7,
                quantity3:9,
                body1:"suleiman yusuf kaita Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et quisquam accusamus  recusandae! Architecto blanditiis numquam officia adipisci. Ex, provident?",
                body2:"yusuf kaita Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et quisquam accusamus temporibus vitae cumque mollitia dolores ad repellendus voluptatibus, laboriosam itaque recusandae! Architecto blanditiis numquam officia adipisci. Ex, provident?",
                body3:"sssuleiman yusuf kaita Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et quisquam accusamus temporibus vitae cumque mollitia dolores ad repellendus voluptatibus, laboriosam itaque recusandae! Architecto blanditiis numquam officia adipisci. Ex, provident?",
    
                head:{  
    
                    img:{
                        img:bunner2,
                        img:bunner3
                    }
    
                },          
                weight1:11,
                weight2:100,
                weight3:74,
                height1:30,
                height2:33,
                height3:23,
                quality:"high quality",
                presure:~12,
                title:"refill",
                quantity:3
            },
    
    ])


    const check=(id)=>{
        let list =post.map(post=> post.id===id ? {...post ,checked:!post.checked }:post)
        setpost(list)
        console.log(id)
    }

    useEffect(()=>{

      setloading(false)

      setdis(
        <div  style={{display:"flex",justifyContent:"center",margin:"20px 0px 20px 0px",width:"100%"}}>
                  <div className="carousel-2" >   
          <div className="service2">
            <div className="pro2">
             <div className="lop">
              <img className='img' style={{borderRadius:"5px",marginBottom:"10px"}} src={mini} alt="" width={"100%"} height={"100px"} />
            </div>
              <p style={{fontSize:"21px",margin:"5px"}}>name</p>
              <p style={{fontSize:"20px",margin:"5px"}}> &#8358;amount</p>
            </div>
         
          </div>
          
    {/* <Service/> */}

          </div>
          </div>
      )

    },[])





      const serv=(title)=>{
        
        setservices(title)
      
        if(title==="services"){
         
          setdis(
            <div style={{display:"flex",justifyContent:"center",margin:"20px 0px 20px 0px"}}>
            <div className="carousel-2" >
             
              <div className="service2">
                <div className="pro2">
                 <div className="lop">
                  <img className='img' style={{borderRadius:"5px",marginBottom:"10px"}} src={mini} alt="" width={"100%"} height={"100px"} />
                </div>
                  <p style={{fontSize:"21px",margin:"5px"}}>name</p>
                  <p style={{fontSize:"20px",margin:"5px"}}> &#8358;amount</p>
                </div>
             
              </div>
               
        {/* <Service/> */}
    
              </div>
              </div>
          )
    
        }
        else if(title==="gas"){
          setdis(
            <div style={{display:"flex",height:"10vh",justifyContent:"center",alignItems:"center"}}>gas</div>
          )
        }
        else if(title==="refil"){
          setdis(
            <div style={{display:"flex",height:"10vh",justifyContent:"center",alignItems:"center"}}>refil</div>
          )
        }


      }






    // const url="http://localhost:3500/post";
    //     useEffect(()=>{
            
    //         const fet=async()=>{
    //             const response= await api.get(url)
    //             try{
    //                 setloading(true)
    //                 setpost(response.data)
    //                 seterr(null)
    //                 console.log(response.data)
    //             }catch(err){
    //                 console.log(response.data.message)
    //                 seterr(response.status.message)
    //                 console.log(response.status.message)
    //                 console.log(response.headers.message)
    //             }finally{
    //               setloading(false)

    //             }
    //         }
    //         ((async )=>fet())()
    //     },[])

    

        const add = (product) => {
            setCart(prevCart => {
              const existingProduct = prevCart.find(item => item.name === product.name);
              if (existingProduct) {
                return prevCart.map(item =>
                  item.name === product.name? { ...item, quantity: item.quantity + 1 } : item
                );
              } else {
                return [...prevCart, { ...product, quantity: 1 }];
              }
            });
          };

        const add2 = (product) => {
            setCart(prevCart => {
              const existingProduct = prevCart.find(item => item.id === product.id);
              if (existingProduct) {
                return prevCart.map(item =>
                  item.id === product.id? { ...item, quantity: item.quantity + 1 } : item
                );
              } else {
                return [...prevCart, { ...product, quantity: 1 ,price:product.amount}];
              }
            });
          };

        const shows=()=>{
            shw.current.classList.add("moved")
        }
        const hides=()=>{
            shw.current.classList.remove("moved")
        }
    const [change,setchange]=useState(null)


    const mm=useCallback(()=>{
      
        setdisp(<>

        <div className="show" ref={render}> 

            {searchresult.map((post)=>(

      <div className="inner-2" key={post.name}  >
      <Link to={`item/${post.id}`}>

                <div className='search1'  >
                    <div className="lp">
                        <img style={{borderRadius:"50%"}} src={post.img} alt="" width={"50px"} height={"50px"} />
                        </div>
                        <div className="pp">
                    <p style={{textAlign:"end"}}>{post.name}</p>
                    </div>
                    </div>
                    </Link>
                </div>
                
            ))}
            </div>
            </>
            )
      
},[search,setsearch])

    useEffect(()=>{

            const list=post.filter(post=>((post.name).toLowerCase().trim()).includes(search.trim().toLowerCase()))
            setsearchresult(list.reverse())


    },[post,search])
    const [display,setdisplay]=useState()

    const removeFromCart = (productId) => {
        setCart(prevCart => {
          const product = prevCart.find(item => item.name === productId);
          if (product.quantity ===1) {
            return prevCart.filter(item => item.name !== productId);
          }
        
           else {
            return prevCart.map(item =>
              item.name === productId ? { ...item, quantity: item.quantity - 1 } : item
            );
          }
        });
      };
      
      const inc=(products)=>{
        setCart(prevCart => {
            return prevCart.map(item =>
              item.name === products? { ...item, quantity: item.quantity + 1 } : item
            );
          }
     ) }
     
     const del = (productId) => {
        setCart(prevCart => {
          const product = prevCart.find(item => item.name === productId);
          if (product.quantity ) {
            return prevCart.filter(item => item.name !== productId);
          }
        
           else {
            return prevCart.map(item =>
              item.name === productId ? { ...item, quantity: item.quantity - 1 } : item
            );
          }
        });
      };


     const total = cart.reduce((acc, item) => acc + item.price * item.quantity,0);
    const Cash=()=>{

        setdisplay(
          <div className="social">
          <div className="spiner"></div>
      
      <div className="innerp">
      <div className="icons">
              <FaFacebook style={{fill:"rgb(68, 162, 255)"}} />
              <FaWhatsapp  style={{fill:"rgb(86, 250, 83)"}}/>
              <FaTwitter style={{fill:" rgb(0, 162, 255)"}}/>
              <FaInstagram style={{fill:"rgb(255, 70, 10)"}}/>
            </div>
          <p>
      
          </p>
      </div>
      
        
        </div>
        ) 
    }


    return (
        <Datacontext.Provider value={{
            search,setsearch,searchresult,post,setpost
            ,disp,setdisp,change,setchange,Cash,display,setdisplay
            ,count,setcount,check,all,setall,pt2,setpt2,all2,setall2
            ,vew,setvew,vews,setvews,setarr,arr,setstore,store,shw,render
            ,shows,removeFromCart,cart,setCart,add,inc,total,del,
            loading,err,mm,product1,hides,add2,services,setservices,
            serv,dis
        }}>
            {children}
        </Datacontext.Provider>
    )

} 
export default Datacontext;