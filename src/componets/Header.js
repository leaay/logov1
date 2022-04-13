import React,{useContext,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/ContextProvider';
import useCloseProductPage from '../Hooks/useCloseProductPage';
import gsap from 'gsap';

const Header = () => {

    const {setSlider,cart} = useContext(Context)
    const click = useCloseProductPage()

    function handleSlider(){
        setSlider(true)
    }
    useEffect(()=>{
            
        gsap.fromTo('img.cart-img',{scale:1},{scale:1.2,duration:.3})
        gsap.fromTo('img.cart-img',{scale:1.2},{scale:1,duration:.3})

    },[cart])
    
    return (
        <div className='header'>
            
            <img onClick={handleSlider} alt='menu' className='header-icon burger' src='./images/burger.svg' />
           <Link  className='logo' to='/'> <p onClick={click}>Logo.</p> </Link>

           <Link onClick={click} className='header-icon cart' to='/Cart' > 

                    <img className='cart-img' alt='cart' src='./images/shopping-cart.svg' />
                    { cart.length > 0 ? <div className='cart-lenght'>{cart.length}</div> : null }
                    
           </Link>
            
        </div>
    );
}

export default Header;
