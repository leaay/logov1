import React,{useState,useContext,useEffect,useRef} from 'react';
import { useParams } from 'react-router-dom';
import gsap from 'gsap';
import { Context } from '../context/ContextProvider';
import productsData from '../data/productsData';


const Product = (props) => {

    const {addToCart,addedToCart,setAddedToCart} = useContext(Context)

    const {id} = useParams()

    const [materials,setMaterials] = useState(false)

    

    const loader = useRef()
    
    
    useEffect(()=>{

        

        const tl = gsap.timeline({defaults:{duration:.5,ease:'power3.out'}})
        tl.fromTo(loader.current,{opacity:.4,y:30},{opacity:1,y:0},'<')
        tl.fromTo('p.addedInfo-loader',{x:-300},{x:0,duration:1,ease:'linear'},'<')
        tl.fromTo(loader.current,{opacity:1,y:0},{opacity:0,y:30,duration:.1,onComplete:()=>{
            setAddedToCart(false)}})
            
    },[addedToCart])

    

    

    const currentItem = productsData.find(item => item._id === id)

    const materialsJSX = currentItem.materials.map(item => 
    <p   style={{fontSize:'.9rem'}} className='material-line' >{item}</p> )

    return (



        <div className='product-container'>
            <div className='product-wrapper'>

               {addedToCart ? 
               <div ref={loader} className='addedInfo'>
                        <p className='addedInfo-text'> Item has been added to cart </p>
                        <p className='addedInfo-loader'></p>
                </div> : null}

              
                
                <img className='product-img' src={currentItem.img} alt='prodckt-img' />

                <div className='product-details'>

                        

                        <p style={{fontWeight:'bolder'}} > {currentItem.name}</p>
                        <p style={{fontSize:'.9rem',borderBottom:'solid 1px black',paddingBottom:'1rem'}}>{currentItem.description}</p>

                        <p className='show-materials' onClick={()=> setMaterials(!materials)} > What it is made of ?</p>
                        {materials ? materialsJSX : null}
                        

                        <div className='cta-box'> 
                            <p style={{fontWeight:'bolder',fontSize:'1.2rem'}}>{currentItem.price} € </p> 

                            {
                                addedToCart ? 
                                <button className='btn btn-add'> Add to cart.</button> :
                                <button onClick={()=>{addToCart(currentItem);setAddedToCart(true)}} className='btn btn-add'> Add to cart.</button>
                            }
                            
                        </div>
                </div>
                
                

            </div>
        </div>
    );
}

export default Product;
