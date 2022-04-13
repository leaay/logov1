import React,{useEffect,useContext} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/ContextProvider';
import useCloseProductPage from '../Hooks/useCloseProductPage';
import gsap from 'gsap';


const Slidermenu = () => {

   
    
    

    const {setSlider} = useContext(Context)

    
    const close =   useCloseProductPage()
    function slider(){
        setSlider(false)
    }
    

    useEffect(()=>{
        gsap.fromTo('div.slider',{x:-500,opacity:.9},{x:0,opacity:1,ease:'power3.out',duration:.5})
    })

    function closeSlider(){
        const tl = gsap.timeline({default:{duration:.5,ease:'power3.out'}})
        tl.to('div.close-slider-area',{opacity:0})
        tl.to('div.slider',{x:-500,opacity:.9,onComplete:(()=>{
            setSlider(false)
        })},'<10%')
    }


    return (
        <>
        <div className='slider'>
            <div className='slider-wrapper'>
            <img alt='' onClick={closeSlider} className='slider-close-btn' src='./images/close.svg' />
            <Link onClick={()=>{close() ;  slider()}} style={{color:'black',fontSize:'1.5rem'}} className='logo' to='/'> <p >Logo.</p> </Link>
            <Link onClick={()=>{close() ;  slider()}} className='slider-link-btn' to="/" >_Bag_Page</Link>
            <Link onClick={()=>{close() ; slider()}} className='slider-link-btn' to="/BootsPage" >_Boots_Page</Link>
            <Link onClick={()=>{close() ; slider()}} className='slider-link-btn' to="/HatPage" >_Hat_Page</Link>
            <Link onClick={()=>{close() ; slider()}} className='slider-link-btn' to="/products" >_Browse_Products</Link>
            
            <p className='footer'>® ALL RIGHTS RESERVED</p>

            </div>
            
        </div>
        <div onClick={closeSlider} className='close-slider-area'></div>
        </>
    );
}

export default Slidermenu;
