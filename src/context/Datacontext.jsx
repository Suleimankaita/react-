import { useState, useEffect, createContext ,useRef, useCallback} from "react";
import api from "../api/axios"
import bunner2 from "../img/bunner2.jpeg"
import bunner3 from "../img/bunner3.jpeg"
import bunner4 from "../img/bunner4.png"
import img1 from "../img/slinders.PNG"
import img2 from "../img/sl2.jpg"
import img3 from "../img/sli3.png"
import img4 from "../img/sli4.png"
import img5 from "../img/sli1.jpg"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { FaFacebook,FaWhatsapp,FaTwitter,FaInstagram } from 'react-icons/fa6'
import { set } from "date-fns";


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
    const [vews,setvews]=useState([])
    const shw=useRef()
    const render=useRef()

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
      });
      useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
      }, [cart]);
      
      
    const [post,setpost]=useState([
        {
            id:0,
            img:img1,
            name:"12Kg slinder",
            name2:"7Kg slinder",
            name3:"9Kg slinder",
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
            img:img5,
            name:"12Kg slinder",
            name2:"7Kg slinder",
            name3:"9Kg slinder",
            amount2:1500,
            amount3:17000,
            quantity:7,
            quantity2:7,
            quantity3:9,
            img2:img2,
            img3:img1,
            img4:img2,
            amount:1000,
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
            img:img3,
            amount:1000,
          name:" 6Kg slinder",
          body1:"suleiman yusuf kaita Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et quisquam accusamus temporibus vitae cumque mollitia dolores ad repellendus voluptatibus, laboriosam itaque recusandae! Architecto blanditiis numquam officia adipisci. Ex, provident?",
          body2:"yusuf kaita Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et quisquam accusamus temporibus vitae cumque mollitia dolores ad repellendus voluptatibus, laboriosam itaque recusandae! Architecto blanditiis numquam officia adipisci. Ex, provident?",
          body3:"sssuleiman yusuf kaita Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et quisquam accusamus temporibus vitae cumque mollitia dolores ad repellendus voluptatibus, laboriosam itaque recusandae! Architecto blanditiis numquam officia adipisci. Ex, provident?",
            title:"refill",
            quantity:2,
            head:{  

                img:{
                    img:bunner2,
                    img:bunner3
                }

            },          

        },
        
        {
            id:4,
            img:img4,
            amount:1000,
            body1:"suleiman yusuf kaita Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et quisquam accusamus temporibus vitae cumque mollitia dolores ad repellendus voluptatibus, laboriosam itaque recusandae! Architecto blanditiis numquam officia adipisci. Ex, provident?",
            body2:"yusuf kaita Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et quisquam accusamus temporibus vitae cumque mollitia dolores ad repellendus voluptatibus, laboriosam itaque recusandae! Architecto blanditiis numquam officia adipisci. Ex, provident?",
            body3:"sssuleiman yusuf kaita Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates et quisquam accusamus temporibus vitae cumque mollitia dolores ad repellendus voluptatibus, laboriosam itaque recusandae! Architecto blanditiis numquam officia adipisci. Ex, provident?",
            name:" 8Kg slinder",
            title:"refill",
            quantity:2,
            head:{  

                img:{
                    img:bunner3,
                    img:bunner2,
                    img:bunner3
                }

            },          
            
        },
    ])


    const check=(id)=>{
        let list =post.map(post=> post.id===id ? {...post ,checked:!post.checked }:post)
        setpost(list)
        console.log(id)
    }

    useEffect(()=>{

      setloading(false)


    },[])

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

        const shows=()=>{
            shw.current.classList.toggle("moved")
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
            ,shows,removeFromCart,cart,setCart,add,inc,total,del,loading,err,mm
        }}>
            {children}
        </Datacontext.Provider>
    )

} 
export default Datacontext;