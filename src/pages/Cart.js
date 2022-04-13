import React,{useContext,useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../context/ContextProvider';

const Cart = () => {


    const {cart,removeItem,addMore,minusOne} = useContext(Context)
    const [sum,setSum] = useState()


    const priceArray  = cart.map(item => item.a * item.price)


    useEffect(()=>{


        if(priceArray.length > 0 ){
            
             const  elo  = priceArray.reduce((a,b)=>a+b).toFixed(2)
             setSum(elo)

          }
          

    },[cart])
    
  
    // console.log(cart)

    const cartItems  = cart.map(item => 
        <div className='cart-item-box'>
            <Link to={`/products/${item._id}`} className='product-item-link-img' >
                <img src={item.img} />
            </Link>
           
            <p className='cart-item-name'> {item.name}</p>
            <div className='cart-item-info'>
                <p className='cart-item-price'> {item.price} €</p>
                <div  className='cart-item-a'> 
                    <p onClick={()=>minusOne(item)} className='more-less' >-</p>
                    <p>{item.a}</p>
                    <p onClick={()=>addMore(item)} className='more-less'>+</p>
                </div>
                <p onClick={()=>removeItem(item._id)}  className='cart-item-delete'> DELETE</p>
            </div>
            
        </div>
    )

    return (
        <div className='cart-container'>

                <div className='cart-wrapper'>

                        {
                            cart.length < 1 ?
                            <div className='cart-empty'>YOUR SHOPPING CART IS EMPTY</div> :
                            <div className='cart-box'>

                                <div className='cart-box-title'>SHOPPING BAG </div>

                                <div className='cart-box-contnet'>
                                    {cartItems}
                                </div>

                                <div className='cart-box-summary'>
                                    <p className='cart-box-summary-price'>TOTAL : {sum} €</p>
                                    <button className='btn btn-add'>Place order</button>
                                </div>

                            </div>
                        }

                </div>

            
        </div>
    );
}

export default Cart;
